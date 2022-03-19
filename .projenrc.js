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
  packageName: 'ecs-package',

  // Publish to Pypi
  publishToPypi: {
    distName: 'ecs-dist',
    module: 'ecs-mod',
  },

  // Publish to Nugget
  publishToNuget: {
    dotNetNamespace: 'ecs-org.esc-ns',
    packageId: 'ecs-package.ecs-packagename',
  },

  // // Publish to Maven
  // publishToMaven: {
  //   mavenGroupId: '<your_package_group_id',
  //   mavenArtifactId: '<your_package_target_id>',
  //   javaPackage: '<your_java_package>',
  // },

  // publishToGo: {
  //   moduleName: "<your_moduleName>",
  // },

});

project.gitpod.addDockerImage({
  dockerFile: '.gitpod.Dockerfile',
});

function ts(path) {
  const src = new SourceCode(project, path);
  src.line('// ${FileBase.PROJEN_MARKER}');
  return src;
}

const EcsConstructInterface = 'MyEcsProps';
const EcsConstructConstructor = 'MyEcsConstruct';
const EcsConstruct = ts('src/index.ts');

EcsConstruct.line('import * as ec2 from \'aws-cdk-lib/aws-ec2\';');
EcsConstruct.line('import * as ecs from \'aws-cdk-lib/aws-ecs\';');
EcsConstruct.line('import * as ecs_patterns from \'aws-cdk-lib/aws-ecs-patterns\';');
EcsConstruct.line('import { Construct } from \'constructs\';');

EcsConstruct.open(`export interface ${ EcsConstructInterface } {`);
EcsConstruct.line('readonly numberOfAzs: number;');
EcsConstruct.line('readonly dockerfileAsset: string;');
EcsConstruct.close('}');

EcsConstruct.open(`export class ${ EcsConstructConstructor } extends Construct {`);
EcsConstruct.open(`constructor(scope: Construct, id: string, props: ${ EcsConstructInterface }) {`);
EcsConstruct.line('super(scope, id);');

EcsConstruct.open('const vpc = new ec2.Vpc(this, \'MyVpc\', {');
EcsConstruct.line('maxAzs: props.numberOfAzs,');
EcsConstruct.close('});');

EcsConstruct.open('const cluster = new ecs.Cluster(this, \'MyCluster\', {');
EcsConstruct.line('vpc: vpc,');
EcsConstruct.close('});');

EcsConstruct.open('new ecs_patterns.ApplicationLoadBalancedFargateService(this, \'MyFargateService\', {');
EcsConstruct.line('cluster: cluster,');
EcsConstruct.line('cpu: 512,');
EcsConstruct.line('desiredCount: 6,');
EcsConstruct.open('taskImageOptions: {');
EcsConstruct.line('image: ecs.ContainerImage.fromAsset(props.dockerfileAsset),');
EcsConstruct.close('},');
EcsConstruct.line('memoryLimitMiB: 2048,');
EcsConstruct.line('publicLoadBalancer: true,');
EcsConstruct.close('});');

EcsConstruct.close('}');
EcsConstruct.close('}');

project.synth();