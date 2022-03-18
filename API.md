# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MyEcsConstruct <a name="MyEcsConstruct" id="aymanzahranpackage.MyEcsConstruct"></a>

#### Initializers <a name="Initializers" id="aymanzahranpackage.MyEcsConstruct.Initializer"></a>

```typescript
import { MyEcsConstruct } from 'aymanzahranpackage'

new MyEcsConstruct(scope: Construct, id: string, props: MyEcsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aymanzahranpackage.MyEcsConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aymanzahranpackage.MyEcsConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aymanzahranpackage.MyEcsConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#aymanzahranpackage.MyEcsProps">MyEcsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aymanzahranpackage.MyEcsConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aymanzahranpackage.MyEcsConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aymanzahranpackage.MyEcsConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#aymanzahranpackage.MyEcsProps">MyEcsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aymanzahranpackage.MyEcsConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="aymanzahranpackage.MyEcsConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aymanzahranpackage.MyEcsConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aymanzahranpackage.MyEcsConstruct.isConstruct"></a>

```typescript
import { MyEcsConstruct } from 'aymanzahranpackage'

MyEcsConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aymanzahranpackage.MyEcsConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aymanzahranpackage.MyEcsConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="aymanzahranpackage.MyEcsConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### MyEcsProps <a name="MyEcsProps" id="aymanzahranpackage.MyEcsProps"></a>

#### Initializer <a name="Initializer" id="aymanzahranpackage.MyEcsProps.Initializer"></a>

```typescript
import { MyEcsProps } from 'aymanzahranpackage'

const myEcsProps: MyEcsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aymanzahranpackage.MyEcsProps.property.dockerfileAsset">dockerfileAsset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aymanzahranpackage.MyEcsProps.property.numberOfAzs">numberOfAzs</a></code> | <code>number</code> | *No description.* |

---

##### `dockerfileAsset`<sup>Required</sup> <a name="dockerfileAsset" id="aymanzahranpackage.MyEcsProps.property.dockerfileAsset"></a>

```typescript
public readonly dockerfileAsset: string;
```

- *Type:* string

---

##### `numberOfAzs`<sup>Required</sup> <a name="numberOfAzs" id="aymanzahranpackage.MyEcsProps.property.numberOfAzs"></a>

```typescript
public readonly numberOfAzs: number;
```

- *Type:* number

---



