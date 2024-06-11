# Responsive Layout

## Basic Usage

```jsx
import { Responsive } from "@/layouts/Responsive";

const Page = () => (
	<section>
		<Responsive.Row>
			<Responsive.Col xlg={20} lg={25} md={33} sm={50} xsm={100}>
				<div>Col 1</div>
			</Responsive.Col>
			<Responsive.Col xlg={20} lg={25} md={33} sm={50} xsm={100}>
				<div>Col 2</div>
			</Responsive.Col>
			<Responsive.Col xlg={20} lg={25} md={33} sm={50} xsm={100}>
				<div>Col 3</div>
			</Responsive.Col>
		</Responsive.Row>
	</section>
);
```

The `Responsive` component is a wrapper for the `Row` and `Col` components. The `Row` component is a wrapper for the `Col` component. The `Col` component is a wrapper for the `div` component.

### Responsive.Row

The `Responsive.Row` component is a wrapper for the `Col` component. It is necessary to wrap the `Col` components in a `Row` component.

### Responsive.Col

The `Responsive.Col` component is a wrapper for the `div` component. It accepts the following props:

| Prop      | Type   | Default | Description                                    |
| --------- | ------ | ------- | ---------------------------------------------- |
| xlg       | number | 100     | The $\%$ width to span on extra large screens. |
| lg        | number | 100     | The $\%$ width to span on large screens.       |
| md        | number | 100     | The $\%$ width to span on medium screens.      |
| sm        | number | 100     | The $\%$ width to span on small screens.       |
| xsm       | number | 100     | The $\%$ width to span on extra small screens. |
| className | string | ''      | The class name of the column.                  |
| style     | object | {}      | The style of the column.                       |

## Sizes

The `Responsive` component uses the following breakpoints:

| Breakpoint | Size                   |
| ---------- | ---------------------- |
| xlg        | >= 1584px              |
| lg         | >= 1312px and < 1584px |
| md         | >= 1056px and < 1312px |
| sm         | >= 672px and < 1056px  |
| xsm        | < 672px                |
