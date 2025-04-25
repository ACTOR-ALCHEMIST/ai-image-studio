#!/bin/bash
set -e

# 1. 下载 BFG（如未下载）
if [ ! -f bfg.jar ]; then
  echo "Downloading BFG Repo-Cleaner..."
  curl -L -o bfg.jar https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar
fi

# 2. 生成敏感关键字文件（如 STRIPE_SECRET_KEY 前缀）
echo 'sk_test_' > passwords.txt

# 3. 用 BFG 替换所有历史中的敏感信息
java -jar bfg.jar --replace-text passwords.txt

# 4. 用 BFG 删除 .env 及 .env*.local 文件的历史
java -jar bfg.jar --delete-files .env
java -jar bfg.jar --delete-files ".env*.local"

# 5. 执行 git 垃圾回收
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# 6. 强制推送 main 分支
git push -f origin main

echo "历史敏感信息清理完成，已强制推送到远程。"
