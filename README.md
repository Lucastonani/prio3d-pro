# Priorizador 3D Pro (PWA)

Aplicativo pessoal de priorização de tarefas baseado em Esforço × Retorno × Impacto.

- Funciona 100% offline
- Salva os dados localmente no navegador (LocalStorage)
- Pode ser instalado como aplicativo (PWA) no celular e no computador
- Interface intuitiva e pouco cansativa visualmente

## Estrutura do projeto

```text
./
├── index.html
├── manifest.json
├── service-worker.js
├── css/
│   └── style.css
└── assets/
    ├── icon-192.png
    └── icon-512.png
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo: `prio3d-pro`.
2. Faça upload de todos os arquivos desta pasta (incluindo subpastas).
   - Pelo navegador: arraste todos os arquivos e pastas para a página do repositório.
3. Faça o commit dos arquivos.

Em seguida:

4. Vá em **Settings → Pages**.
5. Em **Source**, escolha `Deploy from a branch`.
6. Em **Branch**, selecione: `main` e `/ (root)`.
7. Clique em **Save**.

O GitHub vai gerar uma URL parecida com:

```
https://seu-usuario.github.io/prio3d-pro/
```

Após alguns instantes, acesse a URL e:

- No celular (Chrome / Edge / navegador principal):
  - Abra o link
  - Use a opção **“Adicionar à tela inicial”**
- No desktop (Chrome / Edge):
  - Abra o link
  - Clique no ícone de instalação na barra de endereço

O app será instalado como um aplicativo independente (PWA), com ícone azul minimalista.

## Observações

- Os dados ficam salvos apenas localmente no navegador do usuário (LocalStorage).
- Se você limpar manualmente os dados do site, o histórico de tarefas será apagado.
- O Service Worker cuida do cache offline e atualiza o app automaticamente quando você fizer mudanças e publicar novamente.
