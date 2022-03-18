FROM jsii/superchain:1-buster-slim-node14

RUN sudo npm install -g projen && \
    echo 'alias pj="npx projen"' >> ~/.bashrc && \
    projen completion >> ~/.bashrc