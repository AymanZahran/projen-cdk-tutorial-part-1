const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ayman Zahran',
  authorAddress: 'ah.zahran@outlook.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'projen-cdk-tutorial-part-1',
  repositoryUrl: 'https://github.com/AymanZahran/projen-cdk-tutorial-part-1.git',

  description: "This package is for Projen Demo",

  // // Publish to Git Release
  release: true,
  releaseEveryCommit: true,

  // Publish to Npm
  releaseToNpm: true,
  packageName: 'aymanzahranpackage',

  // // Publish to Maven
  // publishToMaven: {
  //   mavenGroupId: '<your_package_group_id',
  //   mavenArtifactId: '<your_package_target_id>',
  //   javaPackage: '<your_java_package>',
  // },

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
});
project.synth();