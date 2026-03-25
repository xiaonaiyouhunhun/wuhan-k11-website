# 推送到GitHub的快捷脚本
# 使用方法: 将你的GitHub用户名替换到下面,然后运行

$githubUsername = "你的GitHub用户名"  # 👈 请替换为你的GitHub用户名

$repoName = "wuhan-k11-website"
$repoUrl = "https://github.com/${githubUsername}/${repoName}.git"

Write-Host "正在设置远程仓库..." -ForegroundColor Yellow
git remote set-url origin $repoUrl

Write-Host "正在推送到GitHub..." -ForegroundColor Yellow
git push -u origin master

Write-Host "`n✅ 推送完成!" -ForegroundColor Green
Write-Host "📍 仓库地址: https://github.com/${githubUsername}/${repoName}" -ForegroundColor Cyan
