const { awscdk, SourceCode } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ayman Zahran',
  authorAddress: 'ah.zahran@outlook.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'projen-cdk-tutorial-part-1',
  repositoryUrl: 'https://github.com/AymanZahran/projen-cdk-tutorial-part-1.git',
  description: 'This package is for Projen Demo',

  // Add License
  licensed: true,
  license: 'Apache-2.0',

  // Add gitpod.yml
  gitpod: true,

  // Generate API Doc
  docgen: true,
  docgenFilePath: 'API.md',

  // Automation Trigger
  releaseEveryCommit: true,
  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['AymanZahran'] },

  // Publish to Git Release
  release: true,

  // Publish to Npm
  releaseToNpm: true,
  packageName: 'fastfargate',

  // Publish to Pypi
  publishToPypi: {
    distName: 'fastfargate',
    module: 'fastfargate',
  },

  // Publish to Nugget
  publishToNuget: {
    dotNetNamespace: 'userorg.userns',
    packageId: 'fastfargate',
  },

  // Publish to Maven
  publishToMaven: {
    mavenGroupId: 'io.github.AymanZahran',
    mavenArtifactId: 'fastfargate',
    javaPackage: 'fastfargate',
  },
});

function docker(path) {
  const src = new SourceCode(project, path);
  src.line('# ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".');
  return src;
}

const GitpodDocker = docker('./.gitpod.Dockerfile');
GitpodDocker.line('FROM jsii/superchain:1-buster-slim-node14');
GitpodDocker.line('RUN npm install -g projen');
GitpodDocker.line('RUN echo \'alias pj="npx projen"\' >> /home/gitpod/.bashrc');
GitpodDocker.line('RUN npm install -g cdk');

project.gitpod.addDockerImage({
  dockerFile: '.gitpod.Dockerfile',
});

// project.gitpod.addCustomTask({
//   name: 'ConfigAlias',
//   command: 'echo \'alias pj="npx projen"\' >> ~/.bashrc && echo \'alias cdk="npx cdk"\' >> ~/.bashrc',
// });

project.gitpod.addVscodeExtensions(
  'dbaeumer.vscode-eslint',
  'ms-azuretools.vscode-docker',
  'AmazonWebServices.aws-toolkit-vscode',
);

function ts(path) {
  const src = new SourceCode(project, path);
  src.line('// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".');
  return src;
}

// Ecs Construct
const EcsConstructInterface = 'MyEcsProps';
const EcsConstructConstructor = 'MyEcsConstruct';
const EcsConstruct = ts('src/index.ts');

EcsConstruct.line('import * as path from \'path\';');
EcsConstruct.line('import * as ec2 from \'aws-cdk-lib/aws-ec2\';');
EcsConstruct.line('import * as ecs from \'aws-cdk-lib/aws-ecs\';');
EcsConstruct.line('import * as ecs_patterns from \'aws-cdk-lib/aws-ecs-patterns\';');
EcsConstruct.line('import { Construct } from \'constructs\';');

EcsConstruct.open(`export interface ${ EcsConstructInterface } {`);
EcsConstruct.line('readonly maxAzs: number;');
EcsConstruct.line('readonly desiredCount: number;');
EcsConstruct.line('readonly cpu: number;');
EcsConstruct.line('readonly memoryLimitMiB: number;');
EcsConstruct.line('readonly dockerDirAsset: string;');
EcsConstruct.line('readonly dockerFileAsset: string;');
EcsConstruct.close('}');

EcsConstruct.open(`export class ${ EcsConstructConstructor } extends Construct {`);
EcsConstruct.open(`constructor(scope: Construct, id: string, props: ${ EcsConstructInterface }) {`);
EcsConstruct.line('super(scope, id);');

EcsConstruct.open('const vpc = new ec2.Vpc(this, \'MyVpc\', {');
EcsConstruct.line('maxAzs: props.maxAzs,');
EcsConstruct.close('});');

EcsConstruct.open('const cluster = new ecs.Cluster(this, \'MyCluster\', {');
EcsConstruct.line('vpc: vpc,');
EcsConstruct.close('});');

EcsConstruct.open('new ecs_patterns.ApplicationLoadBalancedFargateService(this, \'MyFargateService\', {');
EcsConstruct.line('cluster: cluster,');
EcsConstruct.line('desiredCount: props.desiredCount,');
EcsConstruct.line('cpu: props.cpu,');
EcsConstruct.line('memoryLimitMiB: props.memoryLimitMiB,');
EcsConstruct.open('taskImageOptions: {');
EcsConstruct.open('image: ecs.ContainerImage.fromAsset(path.resolve(__dirname, props.dockerDirAsset), {');
EcsConstruct.line('file: props.dockerFileAsset,');
EcsConstruct.close('}),');
EcsConstruct.close('},');
EcsConstruct.line('publicLoadBalancer: true,');
EcsConstruct.close('});');

EcsConstruct.close('}');
EcsConstruct.close('}');

//Dummy Test
const DummyTest = 'DummyTest';
const Test = ts('test/main.test.ts');

Test.open('test(\'${ DummyTest }\', () => {');
Test.line('expect(true).toBe(true);');
Test.close('});');

project.synth();