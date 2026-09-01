# Вернуть тексты и блоки к состоянию до «честного» прохода.
# Из папки mads-app:  powershell -File src/rollback-honest/RESTORE.ps1
$root = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
if (-not (Test-Path (Join-Path $root "src\App.tsx"))) {
  $root = Resolve-Path (Join-Path $PSScriptRoot "..\..")
}
$src = Join-Path $root "src"
$bak = $PSScriptRoot
Copy-Item -Force (Join-Path $bak "App.tsx") (Join-Path $src "App.tsx")
Copy-Item -Force (Join-Path $bak "data.ts") (Join-Path $src "data.ts")
Copy-Item -Force (Join-Path $bak "components_Navbar.tsx") (Join-Path $src "components\Navbar.tsx")
Copy-Item -Force (Join-Path $bak "components_Hero.tsx") (Join-Path $src "components\Hero.tsx")
Copy-Item -Force (Join-Path $bak "components_AboutSection.tsx") (Join-Path $src "components\AboutSection.tsx")
Copy-Item -Force (Join-Path $bak "components_PracticeSection.tsx") (Join-Path $src "components\PracticeSection.tsx")
Copy-Item -Force (Join-Path $bak "components_FormatsSection.tsx") (Join-Path $src "components\FormatsSection.tsx")
Copy-Item -Force (Join-Path $bak "components_TeachersSection.tsx") (Join-Path $src "components\TeachersSection.tsx")
Copy-Item -Force (Join-Path $bak "components_ProgramSection.tsx") (Join-Path $src "components\ProgramSection.tsx")
Copy-Item -Force (Join-Path $bak "components_ReviewsSection.tsx") (Join-Path $src "components\ReviewsSection.tsx")
Copy-Item -Force (Join-Path $bak "components_FaqSection.tsx") (Join-Path $src "components\FaqSection.tsx")
Copy-Item -Force (Join-Path $bak "components_EnrollSection.tsx") (Join-Path $src "components\EnrollSection.tsx")
Copy-Item -Force (Join-Path $bak "components_Footer.tsx") (Join-Path $src "components\Footer.tsx")
Copy-Item -Force (Join-Path $bak "components_CursorAndEffects.tsx") (Join-Path $src "components\CursorAndEffects.tsx")
Write-Host "Restored. Run npm run build in mads-app and copy dist to mads/."
