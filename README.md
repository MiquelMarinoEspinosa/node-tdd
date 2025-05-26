### Docker environment

Requires docker installed. In the near future `Dockerfile` and `compose.yaml` files will be created :)

- Initialize docker container
```
make up
```

Access to docker container
```
make shell
```

Packages installed
```
pm install --save-dev jest
npm install --save-dev @babel/preset-typescript
npm install --save-dev @babel/preset-env
npm install --save-dev @jest/globals
```