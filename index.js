// 尝试加减法
// let ok = "hello";
// alert(ok);
// let x = 5;
// let y = 6;
// let z = x+y;
// alert(z);
// let name1 = 'john';
// let admin;
// admin = name1;
// alert(admin);
// let OURPLANET = 'earth';
// alert(OURPLANET);

// let name2 ='wocao';
// alert(`wo de min zi shi ${name2} `);
// alert(`tengo ${6+90} yuan`);

// let age = 88;
// alert(`wo you ${11+age} sui `)
// let num1 = 10;
// let num2 = 20;
// let sum = num1 + num2;

// let lianNing;
// alert(lianNing);
// typeof 423;
// alert(typeof 423);

// let wde1lianning =prompt('请输入你的age',50);
// alert(`ya tengo ${wde1lianning} anos`);
 
// typeof 5555;
// alert(typeof 5555);


// let year = prompt('which year is your birthday?',1999);
// alert(`your birthday is ${year} of this planet`);
// let money = confirm('are you alive?');
// alert(money);

// 转换类型,数字转字符串
// let minZi = 666666;
// alert(typeof minZi);
// minZi = String(minZi);
// alert(typeof minZi);

// 字符串转数字
// let age1 = '25';
// alert(typeof age1);
// name2 = Number(age1);
// alert(typeof name2);

// 不需要重新声明变量，直接修改变量的属性。
// let age2 = '25';
// age2 = Number(age2);
// alert(typeof age2);
// // alert(Boolean(0)); // false
// alert(Boolean('0')); // true
// alert(Boolean('')); // false
// alert(Boolean(null)); // false
// alert(Boolean(undefined)); // false
// alert(Boolean(NaN)); // false
// alert(Boolean(' ')); // true
// age2 = Boolean(age2);
// alert(age2); // true

// let age3 = 99;
// age3 = -age3;
// alert(age3); // -99

// let age4 = 99, age5 = 100;
// alert(age4 - age5); // -1

// let age6 = 9, age7 = 2;
// alert(age6 / age7); // 4
// alert(age6 % age7); // 1
// alert(age6 ** age7); // 81

// let   age8 = '100', age9 = '20';
// // alert(age8 + age9); // 10020
// let age10 = age8 + age9;
// alert(age10); 还是得到10020

// let age11 = '100';
// alert (typeof +age11); // number

// let age12 = '100', age13 = '20';
// alert(+age12 + +age13); // 120
// alert(age12 + age13);   10020
// let age14 = 100;
// age14++;
// alert(age14);
// 自增/自减

// let age15 = 100;
// let age16 = ++age15;
// alert(age15);
// alert(age16); 
// let age17 = 10;
// let age18 = age17++;
// alert(age17);
// alert(age18);

// let age19 = 10;
// age19++;
// alert(age19); 得到11


// let age20 = 10;
// alert(age20++);
// 得到10.
// let age21 = 10;
// ++age21;

// alert(age21); // 11
// let age22 = 10;
// alert(++age22); // 11
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(+a + +b);
// alert( 2 > 1 );  // true（正确）
// alert( 2 == 1 ); // false（错误）
// alert( 2 != 1 ); // true（正确）

// if

// let minZi = prompt('你叫什么来着？', '小明');
// if (minZi == '小明') {alert('你好，小明！');
//     alert('小明，你好！');
// }

// if (minZi == '小') {alert('你好，小逼崽子！');
//     alert('小逼崽子，你好！');
// }

// else
// let minZi = prompt('你叫什么来着？', '小明');
// if (minZi == '小明') {alert('你好，小明！');
//     }else if(minZi == '小'){alert('你好，小崽子！')} 
//     else {alert('你好，小逼崽子！')}
//     ;
// let age = prompt('请输入你的年龄', 18);
// let minZi = age < 11;
// alert(minZi);

// let age1 = prompt('请输入你的年龄', 18);
// let minZi1 = age1 < 11? '你好，小逼崽子！' : '你好，小明！';
// alert(minZi1);

// let age3 = prompt('age?', 18);
// let message = (age3 < 3) ? 'Hi, baby!' :
//   (age3 < 18) ? 'Hello!' :
//   (age3 < 100) ? 'Greetings!' :
//   'What an unusual age!';
// alert( message );
// let company = prompt('Which company created JavaScript?', '');
// (company == 'Netscape') ?
// alert('Right!') : alert('Wrong.');

// let age4 = prompt('age?', 18);
// if (age4 <0) {alert('-1')}
// else if (age4 >0){alert('1')}
// else {alert('0')};
// 这两个一样的
// let age5 = prompt('age?', 18);
// (age5 < 0)? alert('-1') :(age5 ==0)? alert('0') : alert('1');
// let age6 = prompt('age?', 18);
// (age6 < 10)? alert('你好，小逼崽子！') : alert('你好，小明！');
// true || alert("not printed");
// false || alert("printed");
// 
// let age7 = prompt('age?', 18);
// // if(age7<14 ||age7>90){
// //     alert('你还未成年，不能买彩票');
// // }else{alert('你好，欢迎买彩票')};

// if(!(age7>=14 &&age7<=90)) {alert('你还未成年，不能买彩票')}else{alert('你好，欢迎买彩票')};

// 登录检验
// let username = prompt('请输入用户名', 'user');
// if(username == 'admin'){
//     let password = prompt('请输入密码', '123456');
//     if(password == '1234567'){alert('欢迎回来，管理员')
//     }else{alert('密码错误，请重新输入')}}
// else if(username == 'user'){alert('欢迎回来，普通用户')}else{alert('用户名不存在，请重新输入')};
// let i = 0;
// while (i < 3) { // 依次显示 0、1 和 2
//   alert( i );
//   i++;
// }
// 
// let i = 0;

// for (i = 0; i < 3; i++) { // 使用现有的变量
//   alert(i); // 0, 1, 2
// }

// alert(i); //3，可见，因为是在循环之外声明的
// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );
// for (let ok = 0;ok <20;ok++)
// {
//  if(ok%2==0)continue;   alert(ok);
// };
// let i = 9;
// while (i <13){
//     alert(i);
//     i++;
// };
// for (let i = 0; i<11; i++){
//     if(i%2 !=0){alert(i)}
// }
// let i = 0;
// while(i<3){
//     alert( `number ${i}!`
//      );
//      i++;
// };
let a = prompt('a?','');
switch(a){
    case '0':
        alert('0');
        break
    case '1':
        alert('1');
        break
        case '2':
            case '3':
                alert('2,3') ;
                break;
            default:
    alert( 'We hope that this page looks ok!' ) 
};