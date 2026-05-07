# Frontend

## Libs 

* [Styled with Tailwind CSS](https://tailwindcss.com/)
    ```tsx
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
    ```
* [Lucide icons](https://lucide.dev/)
    ```tsx
    import { Search } from "lucide-react";
    <Search size={24} color="gray" />
    ```

* [Components from Shadcn UI](https://ui.shadcn.com/docs/components)
    ```tsx
    import { Button } from "@/components/ui/button"
    <Button>Shadcn Button</Button>
    ```
* [Zustand for state management](https://zustand-demo.pmnd.rs/)
    ```tsx
    import { create } from "zustand";
    const useStore = create(set => ({
        count: 0,
        increment: () => set(state => ({ count: state.count + 1 }))
    }));
    ```
* [TanStack Query to fetch data](https://tanstack.com/query/latest)
    ```js
    import { useQuery } from "@tanstack/react-query";

    function Example() {
        const { data, error, isLoading } = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const res = await fetch("/api/todos");
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        },
        });

        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        return <pre>{JSON.stringify(data, null, 2)}</pre>;
    }
    ```

## How to test

```sh
cd frontend ; npm run test
```