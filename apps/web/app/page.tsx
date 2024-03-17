import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input-box";
// This button comes from a another repository and module

export default function Page(): JSX.Element {
  return (
    <div>
      <Button appName={"My Button"}>Hello Monorepos</Button>
      <InputBox />
    </div>
  );
}
