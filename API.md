# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MyEcsConstruct <a name="MyEcsConstruct" id="ecs-package.MyEcsConstruct"></a>

#### Initializers <a name="Initializers" id="ecs-package.MyEcsConstruct.Initializer"></a>

```typescript
import { MyEcsConstruct } from 'ecs-package'

new MyEcsConstruct(scope: Construct, id: string, props: MyEcsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ecs-package.MyEcsConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#ecs-package.MyEcsConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#ecs-package.MyEcsConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#ecs-package.MyEcsProps">MyEcsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="ecs-package.MyEcsConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="ecs-package.MyEcsConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="ecs-package.MyEcsConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#ecs-package.MyEcsProps">MyEcsProps</a>

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


## Structs <a name="Structs" id="Structs"></a>

### MyEcsProps <a name="MyEcsProps" id="ecs-package.MyEcsProps"></a>

#### Initializer <a name="Initializer" id="ecs-package.MyEcsProps.Initializer"></a>

```typescript
import { MyEcsProps } from 'ecs-package'

const myEcsProps: MyEcsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ecs-package.MyEcsProps.property.dockerfileAsset">dockerfileAsset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#ecs-package.MyEcsProps.property.numberOfAzs">numberOfAzs</a></code> | <code>number</code> | *No description.* |

---

##### `dockerfileAsset`<sup>Required</sup> <a name="dockerfileAsset" id="ecs-package.MyEcsProps.property.dockerfileAsset"></a>

```typescript
public readonly dockerfileAsset: string;
```

- *Type:* string

---

##### `numberOfAzs`<sup>Required</sup> <a name="numberOfAzs" id="ecs-package.MyEcsProps.property.numberOfAzs"></a>

```typescript
public readonly numberOfAzs: number;
```

- *Type:* number

---



