# 创建GitHub仓库的PowerShell脚本
# 使用方法: .\create_repo.ps1 "your_github_token"

param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

$repoName = "wuhan-k11-website"
$description = "武汉K11企业网站"

# GitHub API endpoint
$apiUrl = "https://api.github.com/user/repos"

# Headers
$headers = @{
    "Authorization" = "token $Token"
    "Accept" = "application/vnd.github.v3+json"
}

# Body
$body = @{
    name = $repoName
    description = $description
    private = $false
    auto_init = $false
} | ConvertTo-Json

try {
    # Create repository
    $response = Invoke-RestMethod -Uri $apiUrl -Method Post -Headers $headers -Body $body -ContentType "application/json"

    Write-Host "✅ 仓库创建成功!" -ForegroundColor Green
    Write-Host "📍 仓库地址: $($response.html_url)" -ForegroundColor Cyan
    Write-Host "🔗 Git URL: $($response.clone_url)" -ForegroundColor Cyan

    # Add remote and push
    Write-Host "`n正在推送代码到GitHub..." -ForegroundColor Yellow

    Set-Location "c:\Users\18571\WorkBuddy\20260325215726"

    # Update remote URL with token
    $remoteUrl = $response.clone_url -replace 'https://', "https://${Token}@"
    git remote set-url origin $remoteUrl

    # Push to GitHub
    git push -u origin master

    Write-Host "`n✅ 代码已成功推送到GitHub!" -ForegroundColor Green
    Write-Host "🌐 访问: $($response.html_url)" -ForegroundColor Cyan

} catch {
    Write-Host "❌ 错误: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "`n请确保:" -ForegroundColor Yellow
    Write-Host "1. Token具有repo权限" -ForegroundColor Yellow
    Write-Host "2. 仓库名称wuhan-k11-website不存在" -ForegroundColor Yellow
    exit 1
}
