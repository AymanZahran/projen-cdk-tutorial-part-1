// ${FileBase.PROJEN_MARKER}
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import { Construct } from 'constructs';
export interface MyEcsProps {
  readonly numberOfAzs: number;
  readonly dockerfileAsset: string;
}
export class MyEcsConstruct extends Construct {
  constructor(scope: Construct, id: string, props: MyEcsProps) {
    super(scope, id);
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: props.numberOfAzs,
    });
    const cluster = new ecs.Cluster(this, 'MyCluster', {
      vpc: vpc,
    });
    new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'MyFargateService', {
      cluster: cluster,
      cpu: 512,
      desiredCount: 6,
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset(props.dockerfileAsset),
      },
      memoryLimitMiB: 2048,
      publicLoadBalancer: true,
    });
  }
}