const { awscdk, SourceCode } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ayman Zahran',
  authorAddress: 'ah.zahran@outlook.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'projen-cdk-tutorial-part-1',
  repositoryUrl: 'https://github.com/AymanZahran/projen-cdk-tutorial-part-1.git',
  description: "This is a Demo on projen",

  // Add License, Gitpod, Docgen, Eslint, Mergify
  licensed: true,
  license: 'Apache-2.0',
  gitpod: true,
  docgen: true,
  docgenFilePath: 'API.md',
  eslint: true,
  mergify: true,

  // Build Trigger
  buildWorkflow: true,
  buildWorkflowTriggers: { pullRequest: {}, push: {} },
  // Release Trigger
  release: true,
  releaseEveryCommit: true,
  defaultReleaseBranch: 'master',
  releaseWorkflow: true,

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
    dotNetNamespace: 'fastfargate',
    packageId: 'fastfargate',
  },

  // Publish to Maven
  publishToMaven: {
    mavenGroupId: 'io.github.aymanzahran',
    mavenArtifactId: 'fastfargate',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
    javaPackage: 'io.github.aymanzahran.fastfargate',
  },
});

project.gitpod.addDockerImage({
  image: 'jsii/superchain:1-buster-slim-node14',
});

project.gitpod.addCustomTask({
  name: 'ConfigAlias',
  command: 'echo \'alias pj="npx projen"\' >> ~/.bashrc && echo \'alias cdk="npx cdk"\' >> ~/.bashrc',
});

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

// Add README.md
function readme(path) {
  const src = new SourceCode(project, path);
  return src;
}

const README = readme('./README.md');
README.line('#### Part1 ([CDK Construct Library])');
README.line('[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)');
README.line('[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/AymanZahran/projen-cdk-tutorial-part-1)');
README.line('[![build](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/build.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/build.yml)');
README.line('[![release](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/release.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/release.yml)');
README.line('[![docker](https://img.shields.io/badge/docker-jsii%2Fsuperchain-brightgreen?logo=docker)](https://hub.docker.com/r/jsii/superchain)');
README.line('[![npm version](https://badge.fury.io/js/fastfargate.svg)](https://badge.fury.io/js/fastfargate)');
README.line('[![PyPI version](https://badge.fury.io/py/fastfargate.svg)](https://badge.fury.io/py/fastfargate)');
README.line('[![NuGet version](https://badge.fury.io/nu/fastfargate.svg)](https://badge.fury.io/nu/fastfargate)');
README.line('#### Part2 ([CDK App])');
README.line('[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)');
README.line('[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/AymanZahran/projen-cdk-tutorial-part-2)');
README.line('[![build](https://github.com/AymanZahran/projen-cdk-tutorial-part-2/actions/workflows/build.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-2/actions/workflows/build.yml)');
README.line('#### Part3 ([CDK Pipelines App])');
README.line('[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)');
README.line('[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/AymanZahran/projen-cdk-tutorial-part-3)');
README.line('[![build](https://github.com/AymanZahran/projen-cdk-tutorial-part-3/actions/workflows/build.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-3/actions/workflows/build.yml)');

README.line('## Part 1');
README.line('![projen-cdk-tutorial-part-1](https://projen-cdk-tutorial.s3.amazonaws.com/projen-cdk-tutorial-part-1.png)');
README.line();
README.line('![projen-cdk-tutorial-part-1-build](https://projen-cdk-tutorial.s3.amazonaws.com/projen-cdk-tutorial-part-1-build.PNG)');
README.line();
README.line('![projen-cdk-tutorial-part-1-release](https://projen-cdk-tutorial.s3.amazonaws.com/projen-cdk-tutorial-part-1-release.PNG)');

README.line();
README.line('## License');
README.line('The [Apache-2.0] license');

README.line();
README.line('## References');
README.line('- [CDK Getting Started]');
README.line('- [CDK API Reference]');
README.line('- [CDK Workshop]');
README.line('- [CDK Patterns]');
README.line('- [CDK Construct Hub]');
README.line('- [AWS Solutions Constructs]');
README.line('- [Projen]');
README.line('- [Projen API Reference]');
README.line('- [Projen AWS CDK Construct Library]');
README.line('- [Projen AWS CDK Applications]');
README.line('- [Publish CDK Constructs]');
README.line();

README.line('[CDK Construct Library]: https://github.com/AymanZahran/projen-cdk-tutorial-part-1');
README.line('[CDK App]: https://github.com/AymanZahran/projen-cdk-tutorial-part-2');
README.line('[CDK Pipelines App]: https://github.com/AymanZahran/projen-cdk-tutorial-part-3');
README.line('[Apache-2.0]: https://github.com/AymanZahran/projen-cdk-tutorial-part-1/blob/master/LICENSE');
README.line('[CDK Getting Started]: https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html');
README.line('[CDK API Reference]: https://docs.aws.amazon.com/cdk/api/v2/');
README.line('[CDK Workshop]: https://cdkworkshop.com/');
README.line('[CDK Patterns]: https://cdkpatterns.com/');
README.line('[CDK Construct Hub]: https://constructs.dev/');
README.line('[AWS Solutions Constructs]: https://docs.aws.amazon.com/solutions/latest/constructs/welcome.html');
README.line('[Projen]: https://github.com/projen/projen');
README.line('[Projen API Reference]: https://projen.io/api/API.html');
README.line('[Projen AWS CDK Construct Library]: https://projen.io/awscdk-construct.html');
README.line('[Projen AWS CDK Applications]: https://projen.io/awscdk-apps.html');
README.line('[Publish CDK Constructs]: https://github.com/seeebiii/projen-test');

project.synth();

