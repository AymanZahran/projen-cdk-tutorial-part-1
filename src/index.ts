import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import { Construct } from 'constructs';

export interface MyEcsProps {
  readonly numberOfAzs: 3;
  readonly dockerfileAsset: './dockerfiles/MyImage';
}

export class MyEcsConstruct extends Construct {
  constructor(scope: Construct, id: string, props: MyEcsProps) {
    super(scope, id);

    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: props.numberOfAzs, // Default is all AZs in region
    });

    const cluster = new ecs.Cluster(this, 'MyCluster', {
      vpc: vpc,
    });

    new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'MyFargateService', {
      cluster: cluster, // Required
      cpu: 512, // Default is 256
      desiredCount: 6, // Default is 1
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset(props.dockerfileAsset),
      },
      memoryLimitMiB: 2048, // Default is 512
      publicLoadBalancer: true, // Default is false
    });
  }
}