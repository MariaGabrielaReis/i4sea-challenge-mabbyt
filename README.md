<div align="center"> <img src="https://user-images.githubusercontent.com/69374340/216955322-abff907f-24b7-4920-92db-9e3d8fae9beb.png" /> </div>

Leia posts do subreddit `/r/pics` <br>
**Aplicação construída para o desafio da empresa i4sea** 🌊

> :hammer_and_wrench: Tecnologias e ferramentas: **TypeScript, React Native, Expo, Axios**

## :gear: Como rodar
Com o [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e [Git](https://git-scm.com/) instalados, siga o tutorial abaixo:

```bash
# Clone esse repositório
$ git clone https://github.com/MariaGabrielaReis/i4sea-challenge-mabbyt.git

# Instale as dependências do projeto, assim como suas tipagens
$ yarn

# Execute a aplicação
$ expo start
```
Use um emulador ou leia o QRCode do terminal por um dispositivo físico <br>
**OBS.:** o device físico precisa ter o app "Expo Go" e estar na mesma rede que seu computador

## 📱 Layout & Features
Neste desafio era preciso criar um app básico do Reddit com React Native, consumindo os posts do `r/pics` (acessível por [esta url](https://api.reddit.com/r/pics/hot.json). Confira abaixo o design da interface principal que contém a listagem das postagens, podendo vizualizar também no Figma através [deste link](https://www.figma.com/file/MaqHiTzqQb4tzMAulso0Ob/Mobile?node-id=0%3A1&t=G7EXYtpK0SMTqqpQ-1)

| Layout idealizado  | Design Alcançado  |
|:------------------:|:-----------------:|
| ![figma](https://user-images.githubusercontent.com/69374340/216955021-85ed319f-ab29-41c9-bc4f-3e36df4f3ee5.png) | <img src="./demo.gif" width='250px' />|


### Requisitos
- [X] Mostrar uma lista das postagens no subreddit r/pics
- [X] Cada postagem deve conter os seguintes dados: **imagem em miniatura (se houver), título, autor, votos, comentários e data de criação
- [ ] Armazenar os dados na store global com Mobx (**obs.: requisito não atendido, foi feito o uso de ContextAPI**)
- [ ] Navegação até a URL da postagem em um WebView
- [X] Uma breve explicação de seu design e suposições junto com seu código.
- [ ] Testes unitário
- [X] Capacidade de classificar a lista de postagens (“principais”, “novos”, “quentes” ou “controversos")

<br>

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202023-LinkedIn-0D9488?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
