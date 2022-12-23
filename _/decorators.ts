type ComponentOptions = {
  selector: string;
};

function Component(value: ComponentOptions) {
  return (constructor: Function) => {
    console.log("component decorator");
    console.log(value);
  };
}

@Component({ selector: "#app" })
class ProfileComponent {}
