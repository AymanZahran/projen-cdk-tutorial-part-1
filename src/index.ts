// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import { Construct } from 'constructs';
export interface MyEcsProps {
  readonly maxAzs: number;
  readonly desiredCount: number;
  readonly cpu: number;
  readonly memoryLimitMiB: number;
  readonly dockerDirAsset: string;
  readonly dockerFileAsset: string;
}
export class MyEcsConstruct extends Construct {
  constructor(scope: Construct, id: string, props: MyEcsProps) {
    super(scope, id);
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: props.maxAzs,
    });
    const cluster = new ecs.Cluster(this, 'MyCluster', {
      vpc: vpc,
    });
    new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'MyFargateService', {
      cluster: cluster,
      desiredCount: props.desiredCount,
      cpu: props.cpu,
      memoryLimitMiB: props.memoryLimitMiB,
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset(path.resolve(__dirname, props.dockerDirAsset), {
          file: props.dockerFileAsset,
        }),
      },
      publicLoadBalancer: true,
    });
  }
}