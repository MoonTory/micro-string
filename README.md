<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/MoonTory/micro-string">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">micro-string</h3>

  <p align="center">
    Applicação desenvolvida com uma arquitetura de micro-serviços! 🚀 Tecnologias utilizadas: Kubernetes / Nginx / Docker / Mongodb / NodeJs / ReactJs / Google Cloud Platform
    <br />
    <a href="https://github.com/MoonTory/micro-string"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/MoonTory/micro-string">View Demo</a>
    ·
    <a href="https://github.com/MoonTory/micro-string/issues">Report Bug</a>
    ·
    <a href="https://github.com/MoonTory/micro-string/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

# Table of Contents

- [Motivações](#moticações)
- [NodeJs](#nodejs)
- [Typescript](#typescript)
- [ReactJs](#reactjs)
- [Nginx](#nginx)
- [Docker](#docker)
- [Kubernetes](#kubernetes)
- [Google Cloud Platform](#google-cloud-platform)
- [Netlify](#netlify)
- [Built With](#built-with)
- [Versioning](#versioning)
- [Author(s)](<#author(s)>)
- [License](#license)

## Motivações

### NodeJs

NodeJs foi utilizada dévido a rápida possibilidade de construir um mvp funcional, além de que
NodeJs é utilizada hoje em grande enterprises para micro-serviços em escala.

### Typescript

Typescript foi utilizado quanto no front-end e no back-end, para melhor compatibilidade em
códido. Podendo se aproveitar o código e separando em biblotecas separadas, demonstrado neste
projeto, pode observar que o `package/common` é apenas uma repositorio npm contendo métodos em
comuns.

### ReactJs

ReactJs foi escolhido para o front-end, pois é a tech que tenho mais dóminio para tal tarefa,
acredito que reactjs adotado por boas práticas, pode ser muito robusto e configurável. Além de
um support e comunidade imenso. Pode também considerar a possibildade de até aproveitar código
em utilizar React Native para o desenvolvimento IOS/Android.

## Nginx

Utilizado como um Proxy-reverso, para resolver DNS e fazer loadbalance em deploys com
docker-compose e docker swarm. Muito utilizado com um API Gateway.

### Docker

Docker foi utilizado para a containerização dos serviços, hoje a mais utilizada. Com a ajuda do
Docker-compose para fazer deploy locais.

### Kubernetes

Utilizado para a infraestrutura cloud e escalablildade da nossa appliacação, configurando pods
e serviços, podemos aumentar a quantidades de instâncias quando a demando está alta, ou escalar
para menos instância com tráfico maior.

### Google Cloud Platform

A GCP oferece muitas ferramentas incriveis para facilitar o processo de deploy para produção.
Utilizado neste projeto foram o GKE (Google Kubernetes Engine) para accesso ao nosso cluster,
GCR (Google Container Registry) para armazenar as imagens construidas por Docker e para o GKE
poder atualizar automáticamente quando houver um novo image.

### Netlify

Netlify é um otimo serviço para deploy de front-ends, podendo se integrar com o git para
atualizar o site com os commits mais recentes, com um CDN com edges pelo mundo todo! E um nível
grauito muito genereso.

### Conclusão

Este stack acaba sendo altamente viável para qual sistema que está começando a ser projetado
com uma arquitetura voltada a micro-serviços. Altamente escalavél, e stack agnostico ou seja
poderia utilizar qualquer tech para o back-end e o front-end.

## Built With

- [Typescript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/en/)
- [ReactJs](https://reactjs.org/)
- [Docker](https://www.docker.com)
- [Kubernetes](https://kubernetes.io/)
- [Nginx](https://www.nginx.com/)
- [Google Cloud Platform](https://cloud.google.com/)
- [Netlify](https://www.netlify.com/)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/MoonTory/micro-string/tags).

## Author(s)

- **Gustavo Quinta** - _Initial work_ - [MoonTory](https://github.com/moontory)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for
details
