# AI Coding Rules for This Project

All Svelte code must follow these conventions:

1. Use Svelte 5 Runes exclusively:
   - $state for mutable state
   - $derived for computed values
   - $effect for side effects
   - $props for props
   - $inspect for debugging

2. Do NOT use React patterns (no hooks, no reducers, no useEffect/useState clones).

3. Components must be single-file `.svelte` modules.

4. All logic must live in <script>.  
   UI markup must stay clean and declarative.

5. Prefer direct mutation:
   count++, arr.push(), obj.done = true

6. Avoid stores unless state must be shared across multiple routes.

7. Functions must be short and cohesive.

8. Generated code must fit the existing project structure and alias system.

---

## Example Command for the AI
“Create a new Svelte 5 Runes component named TodoList that follows all project rules.”