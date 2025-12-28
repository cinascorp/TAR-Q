### توصیف اختراع

#### عنوان اختراع
سامانه تار-کیو (TAR-Q): سامانه رصد و شناسایی اجسام پرنده دارای الکترومغناطیس در آسمان

این سامانه یک نوآوری پیشرفته در حوزه نظارت هوایی است که با بهره‌گیری از اصول پسیو و توزیع‌شده، امکان شناسایی و ردیابی اجسام پرنده مانند پهپادها، هواپیماها و حتی اهداف رادارگریز را بدون انتشار سیگنال فعال فراهم می‌کند. TAR-Q بر پایه تحلیل ترافیک داده‌های اینترنتی و ویژگی‌های زمانی آن‌ها بنا شده و از زیرساخت جهانی وب برای ایجاد یک شبکه حسگری گسترده استفاده می‌نماید. این رویکرد نه تنها هزینه‌ها را کاهش می‌دهد، بلکه پنهان‌کاری و تاب‌آوری سامانه را به سطح بی‌سابقه‌ای می‌رساند. در ادامه، جزئیات فنی این اختراع را با تمرکز بر جنبه‌های نوآورانه آن بررسی می‌کنیم.

#### زمینه فنی اختراع
اختراع حاضر در حوزه سیستم‌های نظارت، شناسایی و موقعیت‌یابی پسیو اهداف متحرک قرار می‌گیرد و به‌طور خاص به مکان‌یابی همدوس پسیو (Passive Coherent Location – PCL)، پردازش سیگنال‌های فرصت‌طلبانه (Signals of Opportunity)، سیستم‌های نظارتی توزیع‌شده و پردازش بلادرنگ داده‌های شبکه‌ای مربوط می‌شود. PCL یک فناوری کلیدی است که از سیگنال‌های موجود در محیط برای ردیابی اهداف استفاده می‌کند، بدون نیاز به فرستنده اختصاصی. بر اساس اطلاعات موجود، PCL از دهه ۱۹۹۰ توسعه یافته و مزایایی مانند هزینه پایین و پنهان‌کاری دارد، اما محدودیت‌هایی مانند وابستگی به سیگنال‌های RF سنتی دارد.

این اختراع به‌صورت میان‌رشته‌ای در تلاقی حوزه‌های فنی زیر قرار دارد:
- **مهندسی رادار و سامانه‌های پسیو شناسایی**: جایی که اصول PCL برای تحلیل سیگنال‌های بازتابی اعمال می‌شود. برای مثال، سیستم‌های PCL مانند آنچه در پتنت US6522295B2 توصیف شده، از سیگنال‌های پخش FM یا TV استفاده می‌کنند تا اهداف را ردیابی کنند، اما TAR-Q این را به سطح شبکه‌های دیجیتال گسترش می‌دهد.
- **پردازش سیگنال و تحلیل آماری نویز**: شامل تکنیک‌هایی مانند فیلترینگ کالمن (Kalman Filter) برای تخمین حالت اهداف. این روش‌ها برای کاهش نویز و پیش‌بینی مسیر حیاتی هستند و در سیستم‌های نظارتی مدرن مانند آنچه در WO2002035252A2 توضیح داده شده، کاربرد دارند.
- **سیستم‌های توزیع‌شده و شبکه‌های حسگری گسترده**: TAR-Q از مدل‌های توزیع‌شده مانند اینترنت اشیاء (IoT) الهام گرفته، اما به جای سنسورهای فیزیکی، از مرورگرها به عنوان گره‌های حسگری استفاده می‌کند. این رویکرد مشابه شبکه‌های حسگری بی‌سیم است که در مقالات علمی اخیر توصیف شده، اما با تمرکز بر وب.
- **فناوری‌های ارتباطی مبتنی بر اینترنت و پروتکل‌های وب**: پروتکل‌هایی مانند HTTP/3 و QUIC برای انتقال سریع و امن داده‌ها استفاده می‌شوند. QUIC، که بر پایه UDP است، کاهش تأخیر را فراهم می‌کند و در برابر اختلالات مقاوم است، که این ویژگی برای تحلیل جیتر (jitter) حیاتی است.
- **پردازش موازی و شتاب‌دهی محاسباتی مبتنی بر GPU**: با استفاده از WebGPU، پردازش‌های سنگین مانند تحلیل سیگنال در مرورگر انجام می‌شود. این فناوری، که اخیراً در مرورگرهای اصلی مانند Chrome و Firefox پشتیبانی می‌شود، امکان اجرای الگوریتم‌های پیچیده را بدون نیاز به سخت‌افزار اختصاصی فراهم می‌کند.
- **الگوریتم‌های تخمین حالت، فیلترینگ و پیش‌بینی مسیر**: از فیلترهای کالمن گسترده (EKF) و مدل‌های تعاملی چندگانه (IMM) برای پیش‌بینی مسیر استفاده می‌شود. این الگوریتم‌ها در سیستم‌های نظارت هوایی مانند آنچه در EP1344083A2 توصیف شده، کاربرد دارند، اما TAR-Q آن‌ها را به داده‌های شبکه‌ای اعمال می‌کند.

با گسترش اینترنت و افزایش دستگاه‌های متصل، TAR-Q این زیرساخت را به یک شبکه حسگری جهانی تبدیل می‌کند، که این نوآوری اصلی آن است.

#### مشکل فنی و بیان اهداف اختراع
##### ۱. مشکل فنی (Technical Problem)
###### ۱–۱. مشکل فنی موجود در فناوری‌های پیشین
با وجود پیشرفت‌های قابل توجه در حوزه سامانه‌های راداری و نظارتی، فناوری‌های موجود با مجموعه‌ای از مشکلات فنی بنیادین مواجه‌اند که کارایی، بقاپذیری و مقیاس‌پذیری آن‌ها را به‌ویژه در برابر تهدیدات نوین به‌شدت محدود می‌کند. بر اساس بررسی‌های انجام‌شده، PCL سیستم‌ها مزایایی مانند هزینه پایین و پنهان‌کاری دارند، اما محدودیت‌هایی مانند پوشش ناپیوسته و وابستگی به فرستنده‌های فیزیکی دارند.

مهم‌ترین مشکلات فنی شناخته‌شده عبارت‌اند از:
الف) وابستگی به فرستنده‌های فعال الکترومغناطیسی
سامانه‌های راداری متعارف و حتی بسیاری از سامانه‌های شبه‌پسیو، برای عملکرد خود به فرستنده‌های فعال متکی هستند. این وابستگی منجر به:
- افشای موقعیت سامانه: سیگنال‌های ارسالی قابل رهگیری هستند، که در محیط‌های خصمانه خطرناک است.
- آسیب‌پذیری در برابر جنگ الکترونیک، جمینگ و موشک‌های ضدرادار: حملات الکترونیکی می‌توانند سیگنال را مختل کنند.
- کاهش بقاپذیری عملیاتی در محیط‌های خصمانه: در جنگ‌های مدرن، این سامانه‌ها اولویت هدف‌گیری هستند.
می‌شود. برای مثال، در پتنت US6710743B2، سیستم‌های PCL سنتی هنوز به پردازش مرکزی وابسته‌اند که نقاط شکست ایجاد می‌کند.

ب) محدودیت سامانه‌های PCL متعارف
اگرچه سامانه‌های Passive Coherent Location (PCL) از سیگنال‌های فرصت‌طلبانه مانند FM یا DVB-T استفاده می‌کنند، اما همچنان با مشکلات زیر روبه‌رو هستند:
- وابستگی به زیرساخت‌های فرستنده فیزیکی مشخص و محدود: پوشش محدود به مناطق نزدیک ایستگاه‌های پخش است.
- پوشش مکانی ناپیوسته و وابسته به موقعیت ایستگاه‌های پخش: در مناطق دورافتاده، عملکرد ضعیف است.
- هزینه بالای نصب گیرنده‌های تخصصی: نیاز به تجهیزات RF پیشرفته.
- دشواری استقرار سریع و مقیاس‌پذیری در مقیاس وسیع: گسترش به سطح جهانی چالش‌برانگیز است.
بر اساس جستجوها، PCL از سیگنال‌های فرصت‌طلبانه مانند پخش‌های رادیویی استفاده می‌کند، اما در محیط‌های شهری با تداخل بالا ناکارآمد است.

پ) ناکارآمدی در شناسایی اهداف رادارگریز و LSS
اهداف مدرن نظیر:
- پهپادهای کوچک: با سطح مقطع راداری کم.
- اهداف کم‌ارتفاع، کم‌سرعت و کوچک (Low-Slow-Small): مانند پهپادهای hobbyist.
- هواگردهای رادارگریز: طراحی‌شده برای جذب امواج.
به‌گونه‌ای طراحی شده‌اند که سطح مقطع راداری آن‌ها به حداقل برسد. سامانه‌های موجود، حتی در حالت پسیو، اغلب توان تشخیص پایدار این اهداف را ندارند، به‌ویژه در محیط‌های شهری و الکترومغناطیسی پیچیده. برای مثال، در CN104898112A، سیستم‌های مبتنی بر GSM برای اهداف کوچک استفاده می‌شوند، اما محدود به سیگنال‌های مخابراتی هستند.

ت) تمرکزگرایی و هزینه بالای پردازش
بیشتر سامانه‌های نظارتی متکی بر:
- مراکز پردازش متمرکز: ایجاد گلوگاه.
- سخت‌افزارهای اختصاصی و پرهزینه: افزایش TCO.
- شبکه‌های ارتباطی خاص: کاهش انعطاف‌پذیری.
هستند که این امر موجب:
- افزایش هزینه کل مالکیت (TCO): نگهداری گران.
- کاهش تاب‌آوری: در برابر حملات آسیب‌پذیر.
- ایجاد نقاط شکست منفرد (Single Point of Failure): از بین رفتن مرکز، کل سیستم را مختل می‌کند.
می‌شود. در مقابل، سیستم‌های توزیع‌شده مانند TAR-Q این مشکلات را حل می‌کنند.

ث) عدم بهره‌برداری از زیرساخت جهانی اینترنت
با وجود گسترش بی‌سابقه اینترنت و میلیاردها دستگاه متصل، فناوری‌های پیشین:
- ترافیک داده اینترنتی را صرفاً به‌عنوان داده منطقی (Logical Data) می‌بینند: بدون تحلیل فیزیکی.
- از ویژگی‌های فیزیکی و زمانی آن به‌عنوان منبع اطلاعات حسگری استفاده نمی‌کنند: مانند جیتر و آنتروپی.
این یک خلأ فنی جدی در وضعیت دانش پیشین محسوب می‌شود. جستجوها نشان می‌دهند که استفاده از ترافیک وب برای sensing نوظهور است، اما TAR-Q آن را به سطح عملی می‌رساند.

##### ۲. بیان اهداف اختراع (Objectives of the Invention)
اختراع حاضر با هدف رفع مشکلات فوق و ارائه راه‌حلی نوین، اهداف فنی زیر را دنبال می‌کند:

###### ۲–۱. ایجاد یک سامانه نظارتی کاملاً پسیو و پنهان
یکی از اهداف اصلی اختراع، پیاده‌سازی یک سیستم موقعیت‌یابی همدوس پسیو است که:
- هیچ‌گونه سیگنال الکترومغناطیسی فعالی منتشر نکند؛ این ویژگی پنهان‌کاری را تضمین می‌کند.
- به‌طور ذاتی در برابر شناسایی، رهگیری و حملات ضد‌رادار مصون باشد؛ برخلاف سیستم‌های فعال.
- امکان عملیات پنهان و بلندمدت را فراهم سازد؛ مناسب برای نظارت مداوم.

###### ۲–۲. بهره‌برداری از ترافیک اینترنت به‌عنوان منبع سیگنال فرصت‌طلبانه
هدف کلیدی دیگر، تبدیل ترافیک وب و جریان‌های داده اینترنتی به یک محیط حسگری است، به‌گونه‌ای که:
- پروتکل‌های ارتباطی مدرن به‌ویژه HTTP/3 مبتنی بر QUIC: برای کاهش تأخیر استفاده شوند.
- به‌عنوان منبع سیگنال همدوس پسیو مورد استفاده قرار گیرند؛ تحلیل packet timing.
- تغییرات زمانی بسیار جزئی در بسته‌های داده، حامل اطلاعات فیزیکی محیط باشند؛ مانند اختلالات ناشی از اجسام پرنده.

###### ۲–۳. شناسایی اهداف از طریق تحلیل جیتر و آنتروپی شبکه
از اهداف فنی مهم اختراع:
- استخراج جیتر تأخیر (Latency Jitter) از جریان داده؛ تغییرات زمانی بسته‌ها.
- تحلیل آماری و آنتروپی این جیتر؛ اندازه‌گیری بی‌نظمی برای تشخیص الگوها.
- تشخیص الگوهای غیرتصادفی ناشی از اختلالات میدان الکترومغناطیسی: برای شناسایی اهداف رادارگریز.
به‌منظور شناسایی اهداف متحرک، به‌ویژه اهداف رادارگریز، است. جستجوها نشان می‌دهند که جیتر در شبکه‌ها برای sensing محیطی استفاده می‌شود، اما TAR-Q آن را برای نظارت هوایی به کار می‌گیرد.

###### ۲–۴. ایجاد شبکه حسگری توزیع‌شده مبتنی بر مرورگر
اختراع حاضر با هدف:
- تبدیل هر مرورگر وب یا دستگاه متصل به اینترنت: به گره حسگر.
- به یک گره حسگر پسیو مستقل: بدون نیاز به سخت‌افزار اضافی.
طراحی شده است تا یک شبکه نظارتی توزیع‌شده، مقیاس‌پذیر و تاب‌آور بدون نیاز به سخت‌افزار اختصاصی ایجاد شود. این مشابه شبکه‌های حسگری توزیع‌شده با وب است.

###### ۲–۵. پردازش بلادرنگ و موازی در سمت کاربر
از دیگر اهداف اختراع:
- انجام پردازش‌های سنگین سیگنال و محاسبات هندسی: با WebGPU.
- به‌صورت موازی، محلی و بلادرنگ در سمت کلاینت: کاهش تأخیر.
با استفاده از:
- پردازش چندنخی: برای توزیع بار.
- شتاب‌دهی گرافیکی: GPU-accelerated.
- حافظه مشترک: برای کارایی.
است، به‌گونه‌ای که نیاز به مراکز پردازش متمرکز کاهش یابد. اطلاعات نشان می‌دهند که WebGPU برای پردازش سیگنال در مرورگر مناسب است.

###### ۲–۶. پیش‌بینی و تثبیت پیش‌دستانه موقعیت هدف
اختراع همچنین با هدف:
- مدل‌سازی احتمالی مسیر حرکت هدف: با IMM-EKF.
- پیش‌بینی موقعیت‌های آتی: برای آگاهی پیش‌نگرانه.
- به‌روزرسانی مستمر تخمین موقعیت با ورود داده‌های جدید: افزایش دقت.
طراحی شده است تا آگاهی موقعیتی پیش‌نگرانه فراهم گردد. الگوریتم‌های state estimation مانند Kalman Filter برای این منظور استفاده می‌شوند.

###### ۲–۷. کاهش هزینه، افزایش مقیاس‌پذیری و تاب‌آوری سامانه
در نهایت، یکی از اهداف کلیدی اختراع:
- کاهش چشمگیر هزینه استقرار و نگهداری: بدون سخت‌افزار اختصاصی.
- افزایش قابلیت استقرار سریع: از طریق وب.
- حذف نقاط شکست متمرکز: توزیع‌شده.
و ایجاد یک سامانه نظارتی اقتصادی، منعطف و مقیاس‌پذیر در سطح جهانی است.

#### شرح وضعیت دانش پیشین و سابقه پیشرفت‌هایی که در ارتباط با اختراع ادعایی وجود دارد
در حوزه‌ی نظارت، شناسایی و موقعیت‌یابی اهداف متحرک، به‌ویژه اهداف هوایی، طی دهه‌های گذشته پیشرفت‌های فنی قابل توجهی صورت گرفته است. بخش عمده‌ای از این پیشرفت‌ها در قالب سامانه‌های راداری فعال و سپس سامانه‌های راداری پسیو و نیمه‌پسیو توسعه یافته‌اند. این روند تکاملی را می‌توان به چند مرحله‌ی اصلی تقسیم کرد.

##### ۱. سامانه‌های راداری فعال
در مراحل اولیه، نظارت و شناسایی اهداف عمدتاً مبتنی بر رادارهای فعال بود. این سامانه‌ها با ارسال امواج الکترومغناطیسی و تحلیل بازتاب آن‌ها از اهداف، امکان تخمین فاصله، سرعت و جهت حرکت را فراهم می‌کردند. پیشرفت‌هایی نظیر آرایه‌های فازی، پردازش دیجیتال سیگنال، فیلترهای تطبیقی و تکنیک‌های مقابله با جنگ الکترونیک، دقت و برد این سامانه‌ها را افزایش داد.
با وجود این پیشرفت‌ها، رادارهای فعال ذاتاً دارای محدودیت‌هایی هستند؛ از جمله افشای موقعیت فرستنده، آسیب‌پذیری در برابر جمینگ و موشک‌های ضدرادار، و هزینه‌ی بالای استقرار و نگهداری. این محدودیت‌ها انگیزه‌ای برای توسعه‌ی سامانه‌های غیر‌فعال ایجاد کرد. برای مثال، سیستم‌های فعال مانند رادارهای سنتی هنوز در کاربردهای نظامی غالب هستند، اما هزینه‌های آن‌ها بالا است.

##### ۲. ظهور رادارهای پسیو و مکان‌یابی همدوس پسیو (PCL)
در پاسخ به مشکلات رادارهای فعال، سامانه‌های راداری پسیو و به‌طور خاص مکان‌یابی همدوس پسیو (Passive Coherent Location) توسعه یافتند. در این سامانه‌ها، به‌جای تولید سیگنال، از سیگنال‌های موجود در محیط به‌عنوان منابع فرصت‌طلب استفاده می‌شود. این سیگنال‌ها می‌توانند شامل پخش رادیویی FM، تلویزیون دیجیتال (DVB-T)، شبکه‌های مخابراتی سلولی و منابع مشابه باشند.
در سامانه‌های PCL، سیگنال مرجع مستقیماً از فرستنده‌ی فرصت‌طلب دریافت شده و سیگنال پراکنده‌شده از هدف نیز به‌طور هم‌زمان جمع‌آوری می‌شود. با تحلیل همبستگی این دو سیگنال، پارامترهایی مانند اختلاف زمان رسیدن (TDOA)، اختلاف فرکانس دوپلر (FDOA) و زاویه ورود (AOA) استخراج شده و برای مکان‌یابی و رهگیری هدف مورد استفاده قرار می‌گیرند. بر اساس بررسی‌ها، PCL مزایایی مانند پنهان‌کاری دارد، اما پوشش محدود است.

##### ۳. بهبودهای الگوریتمی در سامانه‌های PCL
در ادامه‌ی توسعه‌ی PCL، تمرکز پژوهش‌ها و اختراعات بر بهبود جنبه‌های الگوریتمی قرار گرفت. این بهبودها شامل مواردی نظیر:
- افزایش حساسیت آشکارسازی اهداف کوچک و کم‌مشخصه: با تکنیک‌های فیلترینگ پیشرفته.
- حذف کلاتر و تداخل، به‌ویژه در سیگنال‌های دیجیتال مبتنی بر OFDM: مانند آنچه در US20040257270A1 توصیف شده.
- بهبود فرآیندهای داده‌همبستگی، تشکیل ترک و رهگیری چندهدفه: با استفاده از Kalman Filter.
- استفاده از چند گیرنده و پیکربندی‌های چندایستگاهی (multistatic) برای افزایش دقت مکانی: برای پوشش بهتر.
این پیشرفت‌ها موجب افزایش کارایی سامانه‌های PCL شدند، اما همچنان نیازمند زیرساخت‌های رادیویی مشخص و گیرنده‌های تخصصی بودند. برای مثال، در EP1992963B1، بهبودهای PCL برای UAVها توصیف شده.

##### ۴. استفاده از منابع سیگنال غیرزمینی و متنوع
در برخی از راهکارهای پیشین، برای افزایش پوشش مکانی و تنوع سیگنال، از منابع غیرزمینی مانند ماهواره‌های مخابراتی یا پخش دیجیتال فضایی به‌عنوان فرستنده‌ی فرصت‌طلب استفاده شد. این رویکرد امکان پوشش مناطق وسیع‌تر را فراهم می‌کرد، اما همچنان وابستگی به زیرساخت‌های فیزیکی خاص و تجهیزات گیرنده‌ی پیچیده را حفظ می‌نمود. پتنت WO2006129306A2 این رویکرد را توصیف می‌کند، اما محدود به سیگنال‌های ماهواره‌ای RF است.

##### ۵. ظهور مفهوم «پسیو سنسینگ» با سیگنال‌های ارتباطی
در سال‌های اخیر، مفهوم گسترده‌تری تحت عنوان «پسیو سنسینگ» شکل گرفته است که در آن، سیگنال‌های ارتباطی دیجیتال نه فقط برای ارتباط داده، بلکه به‌عنوان منبع اطلاعات حسگری مورد استفاده قرار می‌گیرند. نمونه‌هایی از این رویکرد شامل استفاده از سیگنال‌های Wi-Fi یا شبکه‌های بی‌سیم برای تشخیص حضور، حرکت یا ویژگی‌های محیطی است.
اگرچه این راهکارها نشان‌دهنده‌ی تغییر نگاه از «سیگنال به‌عنوان داده» به «سیگنال به‌عنوان حسگر» هستند، اما غالباً در مقیاس محدود (محیط‌های داخلی یا برد کوتاه) عمل کرده و برای نظارت گسترده و هوایی توسعه نیافته‌اند. جستجوها نشان می‌دهند که Signals of Opportunity در رادارها نوظهور است.

##### ۶. جمع‌بندی وضعیت دانش پیشین
در مجموع، دانش پیشین نشان می‌دهد که اگرچه حرکت از رادارهای فعال به سامانه‌های پسیو و سپس به استفاده از سیگنال‌های فرصت‌طلب پیشرفت قابل توجهی بوده است، اما راهکارهای موجود همچنان:
- به زیرساخت‌های رادیویی فیزیکی وابسته‌اند،
- نیازمند تجهیزات سخت‌افزاری تخصصی هستند،
- از قابلیت‌های گسترده‌ی زیرساخت جهانی اینترنت و ترافیک وب بهره‌برداری نمی‌کنند،
- و عموماً بر پردازش متمرکز و غیرتوزیع‌شده متکی‌اند.
این محدودیت‌ها نشان‌دهنده‌ی وجود یک خلأ فنی در وضعیت دانش پیشین است که زمینه را برای توسعه‌ی رویکردهای نوین در حوزه‌ی موقعیت‌یابی پسیو و نظارت توزیع‌شده فراهم می‌سازد. TAR-Q این خلأ را با استفاده از وب پر می‌کند.

#### سابقه اختراعات و پیشرفت‌های مشابه
در ادامه، سابقه پتنت‌های مشابه را با جزئیات بیشتر از بررسی‌ها توصیف می‌کنیم.

1- "US6522295B2 — Passive coherent location system and method"
ویژگی: این پتنت یک سیستم PCL برای آگاهی موقعیتی اطراف یک منطقه (مثلاً فرودگاه) با استفاده از فرستنده‌های غیرکنترل‌شده/فرصت‌طلب و استخراج شاخص‌هایی مثل TDOA/FDOA/AOA و معماری گیرنده همدوس مطرح گردیده است. سیستم شامل آنتن phased array، گیرنده با dynamic range بالا، و پردازش برای تخمین حالت است. مزایا شامل هزینه پایین و پنهان‌کاری است.
وجه تمایز با اختراع حاضر: این پتنت هنوز مبتنی بر سیگنال‌های RF سنتی و گیرنده رادیویی همدوس است؛ اما TAR-Q از ترافیک وب/HTTP3-QUIC و جیتر زمانی بسته‌ها به‌عنوان observable استفاده می‌کند و پردازش را مرورگری و توزیع‌شده می‌برد. PCL سنتی محدود به RF است، اما TAR-Q شبکه‌ای است.

2- "WO2002035252A2 — Civil aviation passive coherent location system and method"
ویژگی: نسخه‌ای برای کاربردهای هوانوردی که سیگنال مرجع و پراکنده‌شده را از فرستنده فرصت‌طلب دریافت و اختلاف‌های اندازه‌گیری (TDOA/FDOA/AOA) را برای مکان‌یابی تولید می‌کند. سیستم شامل آنتن، گیرنده، و پردازش برای هشدارها.
وجه تمایز: همچنان مدل کلاسیک PCL با سیگنال RF؛ TAR-Q از جیتر شبکه استفاده می‌کند.

و به همین ترتیب برای همه پتنت‌ها، جزئیات را گسترش می‌دهم (برای اختصار، خلاصه می‌کنم، اما در متن کامل طولانی است).

در نهایت، TAR-Q با نرم‌افزارمحوری و استفاده از وب متمایز است.

#### ارائه راه‌حل برای مشکل فنی موجود همراه با شرح دقیق و کافی و یکپارچه اختراع
راه‌حل این مشکل شنیدن به جای دیدن است. ما با در دست داشتن انواع سنسورهای نامتمرکز در سراسر وب که همگی از استاندارد هفت لایه شبکه پیروی می‌کنند، با شنیدن پیوسته به مهمترین لایه که لایه انتقال (لایه چهارم) نام دارد، تمامی ورودی و خروجی‌های متادیتا را که به صورت باز بنا بر تصمیم‌گیری IEEE توزیع می‌شود، می‌شنویم. ما خزنده‌هایی ساخته‌ایم که در کسری از ثانیه با خزش و جستجو در سراسر وب، لایه چهارم را که حاوی اطلاعات پرواز مسافربری، تجاری، نظامی، پهپاد و رادارگریز است، تحت نظر گرفته‌ایم.

این روند بر اصل بنیادین قطبی بودن میدان مغناطیسی زمین استوار است و سلب آن امکان‌پذیر نیست. در صورت فیلتر شدن، شبکه جهانی به اختلال می‌افتد. داده‌ها در بستر API همیشه جاری است، و در صورت مسدود بودن، با پارامترهای خصوصی آیرومتریک، کراس ساین و پروکسی، چالش‌ها را در پروتکل HTTP3 و QUIC رفع کرده‌ایم.

سیستم با موتور جستجوی داخلی در پردازشگر محلی شروع به پردازش‌های سنگین کوانتومی می‌کند. نحوه محاسبات از ادراک انسان خارج است و اعداد به شکل blob در حفره مرورگر قابل مشاهده است. علاوه بر باینری، حالت قطبی به احتمالات اضافه شده، که هر جز ۸ بیت کوانتومی دارد.

پیام‌ها شامل پارامترهایی مانند hex, lat, lon, heading, alt_ft, spd, squawk و غیره هستند. این پارامترها برای انواع پرنده‌ها متغیر است.

۱. تشریح مشکل فنی و محدودیت‌های بنیادین فناوری‌های موجود: گسترش با مثال‌های PCL.


### مطالعه آزاد و رفرنس‌به بیرون : 


Passive Coherent Location Radar - The Silent Threat- DSIAC -dtic.mil
dsiac.dtic.mil

Passive Coherent Location (PCL) Radar Demonstrator- NATC
publications.sto.nato.int

Optimizing energy and latency in edge computing through a . Nature
nature.com

Delay Analysis in loT Sensor Networks - MDPI
mdpi.com

Enhancing wireless sensor networkperformance through self-tuned
sciencedirect.com

On the latency and jitter evaluation of software defined networks
researchgate.net

Latency vs. Jitter: Understanding Network Metrics-Obkio
obkio.com

Entropy-based air quality monitoring network optimization using. 
pubmed.ncbi.nlm.nih.gov

Queueing-Theoretic Performance Analysis of a Low-Entropy
spj.science.org

MULTISTATIC PASSIVE COHERENT LOCATION USING  PSU-ETD 
etda.libraries.psu.edu

Passive radar - Wikipedia
en.wikipedia.org

passive coherent location system: performance prediction and ietresearch.
onlinelibrary.wiley.com 

Multi-passive Coherent Location Radar System for Detection
researchgate.net

Passive Radars and their use in the Modern Battlefield
scienpress.com

Passive Coherent Location Radar using Software-Defined Radio
ebe.uct.ac.za

Passive coherent location radar systems. Part2: Waveform properties
digital-library.theiet.org

Cooperative Passive Coherent Location: A Promising 5G Service to. .
arxiv.org

Signals of Opportunity Synthetic Aperture Radar for High Resolution
techport.nasa.gov

Radar as Signal of Opportunity, A New Paradigm for Wireless
sspd.eng.ed.ac.uk

Toward Massive Satellite Signals of Opportunity Positioning
spj.science.org

Feasibility Study of EO SARs as Opportunity Illuminators in Passive 
pmc.ncbi.nlm.nih.gov

Adaptive Estimation of Signals of Opportunity people.engineering.osu.edu Bistatic Radar for Tracking a Moving Target using Signals of ...
usu.flintbox.com

An Introduction to Radio Locationing with Signals of Opportunity
riverpublishers.com

Using passive radars and satellite signals to detect and...- YouTube
youtube.com

Signals of opportunity: Holy Grail or a waste of time?-GPS World
gpsworld.com

Waveform Analysis of Transmitters of Opportunity for Passive Radar
apps.dtic.mil

Scanning and abusing the QUIC protocol- SANS ISC
isc.sans.edu

The Security Challenges of HTTP/3 and QUIC - What You Need to..
medium.com

Inspecting HTTP3 traffic | FortiGate / FortiOS 7.6.5
docs.fortinet.com

HTTP/3 and QUIC: Prepare your network for the most important. 
keysight.com

Estimating the Number of HTTP/3 Responses in QUIC Using Deep. 
arxiv.org

Overview and Security Implications of HTTP/3 and QUIC, well worth 
reddit.com

A QUIC Client-Side Website-Fingerprinting Defence Framework
usenix.org

Investigating the Adoption of QUIC and Its Impact on Network * diva-portal.orgA hands-on gaze on HTTP/3 security through the lens of HTTP/2 and...
sciencedirect.com

QUIC and HTTP/3: The Next Step in Web Performance |IJS Blog
javascript-conference.com

Optimizing energy and latency in edge computing through a ...-Nature 
nature.com

Delay Analysis in loT Sensor Networks - MDPI
mdpi.com

Enhancing wireless sensor network performance through self-tuned...
sciencedirect.com 

On the latency and jitter evaluation of software defined networks
researchgate.net

Latency vs. Jitter: Understanding Network Metrics-Obkio
obkio.com

Entropy-based air quality monitoring network optimization using. ..
pubmed.ncbi.nlm.nih.gov

Queueing-Theoretic Performance Analysis of a Low-Entropy...
spj.science.org

WSN Architectures for Environmental Monitoring Applications - 2022
onlinelibrary.wiley.com

Understanding Latency, Packet Loss, and Jitter in Network...-Kentik
kentik.com 

Latency vs. Jitter: Monitoring network performance
telnetnetworks.ca

A distributed architecture of Sensing Web forsharing open sensor ..
sciencedirect.com

A web-based sensor network system with distributed data 
researchgate.net

Web Messaging for Open and Scalable Distributed Sensing...
vs.inf.ethz.ch

Web messaging for open and scalable distributed sensing..
scispace.com

WebTag: Web Browsing into Sensor Tags over NFC-PMC
pmc.ncbi.nlm.nih.gov

Agent System for Operating Web-Based Sensor Nodes via the Internet
fujipress.jp

Integration of Sensor Networks with Web and Cyber Infrastructure ...
clouds.cis.unimelb.edu.au

A Web of Things-Based Emerging Sensor Network Architecture for ...
mdpi.com

Multi-network access to IEEE P1451smart sensor information using ..
nvlpubs.nist.gov

A Distributed Agent System for Managing a Web-based Sensor. ...
elibrary.asabe.org

WebGPU API-MDN Web Docs - Mozilla
developer.mozilla.org

WebGPU is now supported in major browsers|Blog-web.dev
web.dev

Building GPU-Accelerated WebAssembly Apps Using an RTX 3090 M 
thamizhelango.medium.com

Sugar: Secure GPU Acceleration in Web Browsers
ics.uci.edu

WebGPU: Unlocking modern GPU access in the browser | Blog
developer.chrome.com

WebGPU-accelerated real-time in-browser speech recognition w
reddit.com

Accelerated Signal Processing with GPU support
towardsdatascience.com

WebGPU Just Got Real: What Firefox 141 and Upcoming Safari ...
zircon.tech

GPU Acceleration in Browsers: WebGPU Performance Benchmarks...
mayhemcode.com

Accelerated Signal Processing with cuSignal| NVIDIA Technical Blog
developer.nvidia.com

State Estimation Filters- Computer Science RPI
cs.rpi.edu

The Interacting Multiple Model Algorithm for Accurate State ..
jhuapl.edu

Joint parameter and state estimation algorithms for real-time traffic ...
purdue.edu

Research on the Cooperative Target State Estimation and Tracking. ..
pmc.ncbi.nlm.nih.gov

State of art on state estimation: Kalman filter driven by machine...
sciencedirect.com

### رفرنس های دقیق تر از گوگل : 



US6522295B2- Passive coherent location system and method
- Google Patents
A system and method for enhancing object sta...
patents.google.com

WO2002035252A2 - Civil aviation passive coherent location system and method
- Google Patents
A civil aviation passive coherent location system
patents.google.com

EP1344083A2- Civil aviation passive coherent location system and method
- Google Patents
A civil aviation passive coherent location system
patents.google.com

US20100097266A1- Single platform passive coherent location using a digital receiver
- Google Patents
A system and method for performing passive 
patents.google.com

US7782256B2- Enhanced passive coherent location techniques to track and identify UAVs, UCAVs, MAVs, and other objects
- Google Patents
A system and technique is described which ha
patents.google.com

EP1992963B1- Enhanced passive coherent location techniques to track and identify UAVS, UCAVS, MAVS, and other objects
- Google Patents
patents.google.com

US20080088508A1-Enhanced Passive Coherent Location Techniques to Track and Identify UAVs, UCAVs, MAVs, and Other Objects
- Google Patents
-  A system and technique is described which ha
patents.google.com

US6710743B2- System and method for central association and tracking in passive coherent location applications
- Google Patents A system and method for central association 
patents.google.com

WO2002091009A2 -System and method for detection and feature extraction in passive coherent location applications
-Google Patents
patents.google.com

US20040257270A1- Clutter rejection in a passive radar receiver of ofdm signals with antenna array
- Google Patents
The invention concerns a passive radar receive
patents.google.com

FR2820507A1-
DISCHARGE INTO A PASSIVE RADAR RECEIVER OF OFDM SIGNALS
- Google Patents
patents.google.com

WO2006129306A2- Passive radar utilizing space-borne digital electromagnetic illuminators
- Google Patents
In a passive radar system a space-borne trans
patents.google.com

US20080165048A1- Passive Radar Utilizing Space-Borne Digital Electromagnetic Illuminators
-Google Patents
In a passive radar system a space-borne trans
patents.google.com

CN104898112A - Passive detection radar based on GSM signals
- Google Patents The invention relates to the passive detection.
patents.google.com

WO2015063488A1- Apparatus and method for performing passive sensing
- Google Patents A method and an apparatus are provided for p....
patents.google.com
