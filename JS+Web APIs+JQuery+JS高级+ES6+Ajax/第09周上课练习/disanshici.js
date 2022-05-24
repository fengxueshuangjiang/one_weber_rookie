// let arr=['123','456','789'];
// let a1=arr.includes('123');
// console.log(a1);
// let a2=2**10;
// console.log(a2);

// async function A1 () {
//     // return 123;
//     // throw new Error('错误');
//     return new Promise((cg,sb)=> {
//         setTimeout(()=>{
//             let a=1238888;
//             cg(a)
//         },1000)
//     })
//     // return new Promise((cg,sb)=> {
//     //     setTimeout(()=>{
//     //         let a=11;
//     //         sb(a);
//     //     },1000)
//     // })
// }
// // console.log(A1());
// let aaa=A1();
// aaa.then(value=>{
//     console.log(value);
// },reason=>{
//     console.log(reason);
// })

// let p = new Promise((cg, sb) => {
//     setTimeout(() => {
//         let a1 = '略略略';
//         cg(a1);
//     }, 1000)
// });
// async function A1() {
//     let b1=await p;
//     console.log(b1);
// }
// A1();

// let A1={
//     xm:'ly',
//     xb:'男',
//     hui() {
//         console.log('打飞机');
//     }
// }
// // let b1=Object.values(A1);
// // console.log(b1);
// // let c1=Object.keys(A1);
// // console.log(c1);
// // let d1=Object.entries(A1);
// // console.log(d1);
// // let e1=Object.getOwnPropertyDescriptors(A1);
// // console.log(e1);

// function A1({a,b,...c}) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// A1({
//     a:123,b:456,c:789,d:'a00',
// })
// let a1={
//     a:123,b:456,c:789,
// }
// let a2={
//     a1:123,b1:456,c1:789,
// }
// let bb={...a1,...a2};
// console.log(bb);

// let arr='aaaa123454515aaa7845156';
// let zz=/\d+(?<NR>[a-z]+)\d+/;
// let jg=zz.exec(arr);
// console.log(jg.groups.NR);

// let a = `
// <ul>
//         <li>
//             <a>123456</a>
//             <p>我的老家</p>
//         </li>
//         <li>
//             <a>123456l</a>
//             <p>1我的老家</p>
//         </li>
//         <li>
//             <a>123456j</a>
//             <p>2我的老家</p>
//         </li>
//         <li>
//             <a>123456h</a>
//             <p>3我的老家</p>
//         </li>
//         <li>
//             <a>123456f</a>
//             <p>4我的老家</p>
//         </li>
//     </ul>
// `;
// let zz = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;
// // let aa = zz.exec(a);
// let aa;
// let dadt=[];
// while(aa=zz.exec(a)) {
//     console.log(aa);
//     dadt.push({k:aa[1],v:aa[2]})
// }
// // console.log(aa);
// console.log(dadt);

// let a=[['x',123],['y',456]];
// let obj=Object.fromEntries(a);
// console.log(obj);

// let arr='       小舞       ';
// console.log(arr.trim());
// console.log(arr.trimStart());
// console.log(arr.trimEnd());

// let arr=[1,2,3,[1,2,3,[4,5,6]]]
// console.log(arr.flat(2));
// let arr=[2,1,2,3,4,5,6]
// let x=arr.flatMap(value=>[value*5])
// console.log(x);

// let  s=Symbol('大逼斗');
// console.log(s.description);

// class A1{
//     mz;
//     #xw;
//     constructor (mz,xw) {
//         this.mz=mz;
//         this.#xw=xw;
//     }
//     ff(){
//         console.log(this.#xw);
//     }
// }
// let a1=new A1('于思彤','160');
// console.log(a1.mz);
// // console.log(a1.xw);
// a1.ff();

// let p1=new Promise((cg,sb)=>{
//     setTimeout(()=>{
//         let x='彤彤姐';
//         cg(x);
//     },1000)
// })
// let p2=new Promise((cg,sb)=>{
//     setTimeout(()=>{
//         let x='童童妹';
//         sb(x);
//     },1000)
// })
// // let aa=Promise.allSettled([p1,p2]);
// let aa=Promise.all([p1,p2]);
// console.log(aa);

// let a='a1a1a1a1a1a111a11a11a11a111a1111a11a111a11a11111a11a111a111a22a22a2222a22a222a222a22a2';
// let zz=/[a-z]+(\d+)[a-z]+/g;
// let aa=a.matchAll(zz);
// // for (const key of aa) {
// //     console.log(key);
// // }
// let a1=[...aa];
// console.log(a1);

// function A1(a) {
//     // a&&a.b&&a.b.c();
//     a?.b?.c();
// }
// A1({
//     b: {
//         cc: '123',
//         c() {
//             console.log('新冠肺炎');
//         }
//     }
// });

// let btn01=document.querySelector('button');
// btn01.addEventListener('click',function () {
//     import('export.js').then(module=>{
//         // module.ff();
//         console.log(module);
//     })
// })

// let x=521n;
// console.log(x);
// let a=555;
// let b=BigInt(a);
// console.log(b,a);

// console.log(globalThis);

// let b=true;
// b &&= 5;
// // b&&(b=200);
// console.log(b);
// let a=1_000_000;
// let b=1000000;
// console.log(a===b);

// let p1=new Promise((cg,sb)=>{
//     setTimeout(()=>{
//         let a='成功1';
//         cg(a);
//     },100)
// })
// let p2=new Promise((cg,sb)=>{
//     setTimeout(()=>{
//         let a='成功2';
//         cg(a);
//     },100)
// })
// let pp=Promise.any([p1,p2]);
// console.log(pp);

// let p3=new Promise((cg,sb)=>{
//     setTimeout(()=>{
//         let aaa='失败1';
//         sb(aaa);
//     },100)
// })
// let ppp=Promise.any([p3]);
// console.log(ppp);

// let a='aasdfghjl1111llgfgfdgfd';
// let b=a.replaceAll('1','8');
// console.log(b);