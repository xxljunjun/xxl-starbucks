
```
#1eb274   //主色系

```
### 一、vue2.0+typescript
+ vue-property-decorator
+ vue-class-component
```js

import { 
  Vue, 
  Component, 
  Prop, 
  PropSync,
  Model,
  Watch,
  Emit, 
  Ref, 
  Provide, 
  ProvideReactive,
  Inject, 
  InjectReactive 
} from 'vue-property-decorator';

@Component
/*
第一种写法
@Component({
  components: {PropComponent,},
  filters:{},
  directives:{},
  beforeRouteLeave(to: any, from: any, next: any) {
    console.log('beforeRouteLeave');
    next();
  },
  beforeRouteEnter(to: any, from: any, next: any) {
    console.log('beforeRouteLeave');
    next();
  }
})
export default class PropComponent extends Vue {}

第二种写法
Component.registerHooks([
  'beforeRouteLeave',
  'beforeRouteEnter',
]);
@Component
export default class App extends Vue {
  beforeRouteLeave(to: any, from: any, next: any) {
    console.log('beforeRouteLeave');
    next();
  }
 
  beforeRouteEnter(to: any, from: any, next: any) {
    console.log('beforeRouteLeave');
    next();
  }
}
*/
@Prop
/*
export default class PropComponent extends Vue {
   @Prop(String) readonly name!: string | undefined;
   @Prop({ default: 30, type: Number }) private age!: number;
   @Prop([String, Boolean]) private sex!: string | boolean;
}
*/
@PropSync
/*
==>使用PropSync的时候是要在父组件配合.sync使用的
@Component
export default class PropSyncComponent extends Vue {
  @PropSync('like', { type: String }) syncedlike!: string; // 用来实现组件的双向绑定,子组件可以更改父组件穿过来的值
 
  editLike(): void {
    this.syncedlike = '子组件修改过后的syncedlike!'; // 双向绑定,更改syncedlike会更改父组件的like
  }
}
*/
@Model
/*
@Component
export default class ModelComponent extends Vue {
   @Model('change', { type: String }) readonly checked!: string
 
   public inputHandle(that: any): void {
     this.$emit('change', that.target.value); // 后面会讲到@Emit,此处就先使用this.$emit代替
}
*/
@Watch
/*
==>发生在beforeCreate勾子之后，created勾子之前
@Component
export default class WatchPage extends Vue {
  private child = '';
  @Watch('child',{ immediate: true, deep: true })
  onChildChanged(newValue: string, oldValue: string) {
    console.log(newValue);
    console.log(oldValue);
  }
}
*/
@Emit
/*
type Person = {name: string; age: number; sex: string };
@Component
export default class PropComponent extends Vue {
  private name: string | undefined;
 
  private age: number | undefined;
 
  private person: Person = { name: '我是子组件的张三', age: 1, sex: '男' };
 
  @Prop(String) readonly sex: string | undefined;
 
  @Emit('delemit') private delEmitClick(event: MouseEvent) {}
 
  @Emit() // 如果此处不设置别名字,则默认使用下面的函数命名
  addToCount(p: Person) { // 此处命名如果有大写字母则需要用横线隔开  @add-to-count
    return this.person; // 此处不return,则会默认使用括号里的参数p;
  }
 
  delToCount(event: MouseEvent) {
    this.delEmitClick(event);
  }
*/
@Ref
/*
//为了简便写法this.$refs.RefC
@Component({
  components: { RefComponent },
})
export default class RefPage extends Vue {
  @Ref('RefComponent') readonly RefC!: RefComponent;
  @Ref('aButton') readonly ref!: HTMLButtonElement;
  getRef() {
    console.log(this.RefC);
    console.log(this.ref);
  }
}
*/
@Provide  @Inject  @ProvideReactive  @InjectReactive
/*
@Provide() foo = Symbol('fooaaa');
@ProvideReactive() fooReactive = 'fooReactive';
@ProvideReactive('1') fooReactiveKey1 = 'fooReactiveKey1';
@ProvideReactive('2') fooReactiveKey2 = 'fooReactiveKey2';

@Component
export default class ProvideGSonComponent extends Vue {
  @Inject() readonly foo!: string;
  @InjectReactive() fooReactive!: string;
  @InjectReactive('1') fooReactiveKey1!: string;
  @InjectReactive() fooReactiveKey2!: string;
}
*/

```