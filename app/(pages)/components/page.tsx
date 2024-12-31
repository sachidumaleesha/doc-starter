import { Metadata } from 'next'
import { CopyableCodeBlock } from '@/components/copyable-code-block'

export const metadata: Metadata = {
  title: 'Components | Minimal Docs Site',
  description: 'Explore the components available in our library',
}

export default function Components() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Components</h1>
      <p className="text-xl mb-4">
        Our library provides a set of reusable components to help you build your
        application faster. Here&apos;s an overview of some key components:
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Button</h2>
      <p className="mb-4">
        The Button component is a versatile and customizable button that can be
        used for various actions in your application.
      </p>
      <CopyableCodeBlock
        code={`import { Button } from '@our-company/package';

<Button variant="primary" onClick={() => console.log('Clicked!')}>
  Click me
</Button>`}
        language="jsx"
      />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Card</h2>
      <p className="mb-4">
        The Card component is used to display content in a box with a consistent
        style.
      </p>
      <CopyableCodeBlock
        code={`import { Card, CardHeader, CardContent } from '@our-company/package';

<Card>
  <CardHeader>Card Title</CardHeader>
  <CardContent>This is the card content.</CardContent>
</Card>`}
        language="jsx"
      />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Input</h2>
      <p className="mb-4">
        The Input component is a styled input field for collecting user data.
      </p>
      <CopyableCodeBlock
        code={`import { Input } from '@our-company/package';

<Input placeholder="Enter your name" onChange={(e) => console.log(e.target.value)} />`}
        language="jsx"
      />
      <p className="mt-4">
        For a complete list of components and their props, please refer to our
        API Reference section.
      </p>
    </div>
  )
}

