1.为什么需要Cookie？何为Cookie机制。
在Web开发中，需要对用户的操作进行跟踪，理论上一个用户的操作应该归属于一个会话，而另一个
用户的操作归属于另一个会话，只有这样才能保证某个用户对网页的操作不会与另一个用户的操作
相混淆。电商中的购买情况跟进，管理系统中信息的显示灯，均需要会话的精确判定。但是Web中的
HTTP协议是无状态的，当服务端和客户端之间的数据传输结束之后，两者之间的联系将会失去，连接
会断开。当下一次数据传输时，将重新建立联系，但是此次联系是独立的，不会识别此次的操作和
之前的某一次数据传输是同一个会话，也就不能精确的将此次数据传输归类，此为HTTP协议的无状态。
为了弥补HTTP的这种无状态情况，Cookie横空出世，有Cookie可以对每次的数据传输进行跟踪，达
到跟踪会话的效果，即为Cookie机制。
2.何为Cookie
由于HTTP是无状态的协议，所以服务器每次和客户端连接传输数据时并不知道客户的身份是什么，
即不知道此次数据传输是归属于哪个会话。为了保证服务器能够识别数据传输的会话归属情况，识别
客户身份，需要给客户端颁发一个‘通行证’，无论谁访问，谁使得客户端和服务端连接传输数据都
必须携带这个‘通行证’，这样服务器就能识别会话的归属识别客户的身份，达到有状态的效果。
Cookie其实是一段文本信息，当客户端与服务端连接时，服务端需要标记改用户的话，就会用
response向客户端的浏览器颁发一个Cookie，客户端浏览器会将这个Cookie保存起来，当客户端再
次连接服务端时，会将Cookie和网址一起提交给服务器，服务器则能根据Cookie来识别客户身份和
状态，如有需要，服务器还会对Cookie做相应的修改。document.cookie即是网站的Cookie。
在浏览器地址栏输入JavaScript:alert (document. cookie)弹窗查看。
3.JAVA中的类操作
Java中将Cookie封装成一个javax.servlet.http.Cookie类。每个Cookie均是这个类的对象。
服务器通过操作类的对象来对客户端的Cookie进行操作。通过request.getCookie()来获取客户端
提交的所有Cookie，以Cookie[]数组的形式返回。通过response.addCookie(Cookiecookie)
向客户端设置Cookie。Cookie对象使用key-value属性对的形式保存用户状态，一个Cookie对象
保存一个属性对，一个request或者response同时使用多个Cookie。因为Cookie类位于包
javax.servlet.http.*下面，所以JSP中不需要import该类。
4.Cookie的不可跨域名性
浏览器会得到多个服务器颁发的Cookie，比如百度和谷歌，那么浏览器访问谷歌网站与谷歌服务器
连接时会不会或者能不能携带百度的Cookie呢，答案是不能的，只有这样才能保证用户的隐私，即
谷歌不能获取到用户在百度上的信息。服务端的Cookie是通过浏览器来管理的，浏览器是通过域名
来判断某次连接该使用哪个Cookie，不用的域名会使用不同的Cookie。
5.Cookie的属性值
String name Object value int maxAge（有效时间，默认为-1，记住正数，负数和零的区别，）
boolean 等
Cookie cookie = new Cookie("username","helloweenvsfei");   // 新建Cookie
cookie.setMaxAge(Integer.MAX_VALUE);           // 设置生命周期为MAX_VALUE
response.addCookie(cookie);                    // 输出到客户
6.Cookie的删除和修改
没有修改功能，通过新建名字一样的Cookie添加到response中来覆盖原来的Cookie
没有删除功能，通过新建名字一样的Cookie，设置maxAge为0，加到response中来覆盖原来的
Cookie便会将原来的删除。
7.Cookie的域名
通常同一个域名下的两个二级域名如www.helloweenvsfei.com和images.helloweenvsfei.com
之间也不能互相使用Cookie，因为两者域名不严格相同。如果想
使不严格相同的二级域名能使用该Cookie则需要设置Cookie的domain参数。如下：
Cookie cookie = new Cookie("time","20080808"); // 新建Cookie
cookie.setDomain(".helloweenvsfei.com");           // 设置域名
cookie.setPath("/");                              // 设置路径
cookie.setMaxAge(Integer.MAX_VALUE);               // 设置有效期
response.addCookie(cookie);                       // 输出到客户端
8.Cookie的路径
domain属性决定运行访问Cookie的域名，而path属性决定允许访问Cookie的路径（ContextPath）
Cookie cookie = new Cookie("time","20080808");     // 新建Cookie
cookie.setPath("/session/");                          // 设置路径
response.addCookie(cookie);                           // 输出到客户端
设置为“/”时允许所有路径使用Cookie。path属性需要使用符号“/”结尾。name相同但domain
不相同的两个Cookie也是两个不同的Cookie。
9.Cookie的安全性
HTTP不仅是无状态的，而且是不安全的，使用HTTP协议传输的数据有可能被拦截。设置Cookie的
secure为true时，浏览器只会在HTTPS和SSL等安全协议中传输此类Cookie。
Cookie cookie = new Cookie("time", "20080808"); // 新建Cookie
cookie.setSecure(true);                           // 设置安全属性
response.addCookie(cookie);                        // 输出到客户端


10. Session机制
除了使用Cookie，Web应用程序中还经常使用Session来记录客户端状态。Session是服务器端使用
的一种记录客户端状态的机制，使用上比Cookie简单一些，相应的也增加了服务器的存储压力。
11.什么是Session
Session是另一种记录客户状态的机制，不同的是Cookie保存在客户端中，而Session是保存在服务
器中的。浏览器和服务器连接时，服务器将浏览器的信息以某种形式保存在服务器上，这就是
Session，当浏览器再次和服务器连接时，只需要查询服务器上的Session便可以识别客户。
如果说Cookie机制是通过查询浏览器上的通行证来识别客户身份的话，那么Session则在服务器上
建立了该客户的档案，每次浏览器和服务器连接时只要查询服务器上的档案便能识别客户的身份。
12.待续
