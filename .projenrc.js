const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ayman Zahran',
  authorAddress: 'ah.zahran@outlook.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'projen-cdk-tutorial-part-1',
  repositoryUrl: 'https://github.com/AymanZahran/projen-cdk-tutorial-part-1.git',
  description: 'This package is for Projen Demo',

  // Add gitpod.yml
  gitpod: true,

  // Generate API Doc
  docgen: true,
  docgenFilePath: 'API.md',

  // Automation Trigger
  releaseEveryCommit: true,
  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['AymanZahran'] },

  // // Publish to Git Release
  release: true,

  // Publish to Npm
  releaseToNpm: true,
  packageName: 'aymanzahranpackage',

  // Publish to Pypi
  publishToPypi: {
    distName: 'aymanzahrandist',
    module: 'aymanzahranmod',
  },

  // Publish to Nugget
  publishToNuget: {
    dotNetNamespace: 'aymanorg.aymanns',
    packageId: 'aymanpackage.aymanpackagename',
  },

  // // Publish to Maven
  // publishToMaven: {
  //   mavenGroupId: '<your_package_group_id',
  //   mavenArtifactId: '<your_package_target_id>',
  //   javaPackage: '<your_java_package>',
  // },

  // publishToGo: {
  //   moduleName: "github.com/projen/projen-go",
  // },

});

// project.gitpod.addDockerImage({
//   image: "jsii/superchain:1-buster-slim-node14"
// })

// project.gitpod.addCustomTask({
//   name: "Install Projen",
//   command: "sudo npm install -g projen && echo 'alias pj=\"npx projen\"' >> ~/.bashrc && projen completion >> ~/.bashrc"
// });

project.gitpod.addDockerImage({
  dockerFile: ".gitpod.Dockerfile"
})


project.synth();