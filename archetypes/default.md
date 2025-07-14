---
date: {{ .Date }}
draft: true
title: {{ replace .File.ContentBaseName "-" " " | title }}
slug: {{ substr (md5 (printf "%s%s" .Date (replace .TranslationBaseName "-" " " | title))) 4 8 }}
---