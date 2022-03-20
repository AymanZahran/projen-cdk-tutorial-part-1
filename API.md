# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MyEcsConstruct <a name="MyEcsConstruct" id="fastfargate.MyEcsConstruct"></a>

#### Initializers <a name="Initializers" id="fastfargate.MyEcsConstruct.Initializer"></a>

```typescript
import { MyEcsConstruct } from 'fastfargate'

new MyEcsConstruct(scope: Construct, id: string, props: MyEcsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fastfargate.MyEcsConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#fastfargate.MyEcsConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#fastfargate.MyEcsConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#fastfargate.MyEcsProps">MyEcsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="fastfargate.MyEcsConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="fastfargate.MyEcsConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="fastfargate.MyEcsConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#fastfargate.MyEcsProps">MyEcsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#fastfargate.MyEcsConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="fastfargate.MyEcsConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#fastfargate.MyEcsConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="fastfargate.MyEcsConstruct.isConstruct"></a>

```typescript
import { MyEcsConstruct } from 'fastfargate'

MyEcsConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="fastfargate.MyEcsConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fastfargate.MyEcsConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="fastfargate.MyEcsConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### MyEcsProps <a name="MyEcsProps" id="fastfargate.MyEcsProps"></a>

#### Initializer <a name="Initializer" id="fastfargate.MyEcsProps.Initializer"></a>

```typescript
import { MyEcsProps } from 'fastfargate'

const myEcsProps: MyEcsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#fastfargate.MyEcsProps.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#fastfargate.MyEcsProps.property.desiredCount">desiredCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#fastfargate.MyEcsProps.property.dockerDirAsset">dockerDirAsset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#fastfargate.MyEcsProps.property.dockerFileAsset">dockerFileAsset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#fastfargate.MyEcsProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#fastfargate.MyEcsProps.property.memoryLimitMiB">memoryLimitMiB</a></code> | <code>number</code> | *No description.* |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="fastfargate.MyEcsProps.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `desiredCount`<sup>Required</sup> <a name="desiredCount" id="fastfargate.MyEcsProps.property.desiredCount"></a>

```typescript
public readonly desiredCount: number;
```

- *Type:* number

---

##### `dockerDirAsset`<sup>Required</sup> <a name="dockerDirAsset" id="fastfargate.MyEcsProps.property.dockerDirAsset"></a>

```typescript
public readonly dockerDirAsset: string;
```

- *Type:* string

---

##### `dockerFileAsset`<sup>Required</sup> <a name="dockerFileAsset" id="fastfargate.MyEcsProps.property.dockerFileAsset"></a>

```typescript
public readonly dockerFileAsset: string;
```

- *Type:* string

---

##### `maxAzs`<sup>Required</sup> <a name="maxAzs" id="fastfargate.MyEcsProps.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number

---

##### `memoryLimitMiB`<sup>Required</sup> <a name="memoryLimitMiB" id="fastfargate.MyEcsProps.property.memoryLimitMiB"></a>

```typescript
public readonly memoryLimitMiB: number;
```

- *Type:* number

---



