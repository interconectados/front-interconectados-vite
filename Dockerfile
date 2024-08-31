- name: Build and push Docker image
  uses: docker/build-push-action@v2
  with:
    context: ./path-to-dockerfile-directory
    file: ./path-to-dockerfile-directory/Dockerfile
    push: true
    tags: alacorazza/front-interconectados-vite:latest


