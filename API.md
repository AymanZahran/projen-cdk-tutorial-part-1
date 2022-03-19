# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MyEcsConstruct <a name="MyEcsConstruct" id="ecs-package.MyEcsConstruct"></a>

#### Initializers <a name="Initializers" id="ecs-package.MyEcsConstruct.Initializer"></a>

```typescript
import { MyEcsConstruct } from 'ecs-package'

new MyEcsConstruct(scope: Construct, id: string, props: IMyEcsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ecs-package.MyEcsConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#ecs-package.MyEcsConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#ecs-package.MyEcsConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#ecs-package.IMyEcsProps">IMyEcsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="ecs-package.MyEcsConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="ecs-package.MyEcsConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="ecs-package.MyEcsConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#ecs-package.IMyEcsProps">IMyEcsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ecs-package.MyEcsConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="ecs-package.MyEcsConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ecs-package.MyEcsConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="ecs-package.MyEcsConstruct.isConstruct"></a>

```typescript
import { MyEcsConstruct } from 'ecs-package'

MyEcsConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="ecs-package.MyEcsConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ecs-package.MyEcsConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="ecs-package.MyEcsConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IMyEcsProps <a name="IMyEcsProps" id="ecs-package.IMyEcsProps"></a>

- *Implemented By:* <a href="#ecs-package.IMyEcsProps">IMyEcsProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ecs-package.IMyEcsProps.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#ecs-package.IMyEcsProps.property.desiredCount">desiredCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#ecs-package.IMyEcsProps.property.dockerDirAsset">dockerDirAsset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#ecs-package.IMyEcsProps.property.dockerFileAsset">dockerFileAsset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#ecs-package.IMyEcsProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#ecs-package.IMyEcsProps.property.memoryLimitMiB">memoryLimitMiB</a></code> | <code>number</code> | *No description.* |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="ecs-package.IMyEcsProps.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="ecs-package.IMyEcsProps.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number

---

##### `dockerDirAsset`<sup>Required</sup> <a name="dockerDirAsset" id="ecs-package.IMyEcsProps.property.dockerDirAsset"></a>

```typescript
public readonly dockerDirAsset: string;
```

- *Type:* string

---

##### `dockerFileAsset`<sup>Required</sup> <a name="dockerFileAsset" id="ecs-package.IMyEcsProps.property.dockerFileAsset"></a>

```typescript
public readonly dockerFileAsset: string;
```

- *Type:* string

---

##### `maxAzs`<sup>Required</sup> <a name="maxAzs" id="ecs-package.IMyEcsProps.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number

---

##### `memoryLimitMiB`<sup>Required</sup> <a name="memoryLimitMiB" id="ecs-package.IMyEcsProps.property.memoryLimitMiB"></a>

```typescript
public readonly memoryLimitMiB: number;
```

- *Type:* number

---

