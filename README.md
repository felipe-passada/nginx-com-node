# nginx-com-node

1. clone a aplicação
   ```sh
   git clone git@github:felipe-passada/nginx-com-node
   ```
2. Build das imagens
   ```sh
   docker build -t felipepassada/node-app app/ && docker build -t felipepassada/nginx nginx/
   ```
3. rode o docker-compose com o build para builda a imagem do node e nginx e também para subir os serviços
   ```
   docker-compose up -d --build
   ```
