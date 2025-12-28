________________________________

## عنوان اختراع: سیستم و روش تشخیص اشیاء هوایی مبتنی بر تحلیل سایه الکترومغناطیسی و آنتروپی شبکه توزیع‌شده

### چکیده (Abstract)

### این اختراع سیستمی نوین برای ردیابی و تشخیص اشیاء پرنده در آسمان را ارائه می‌دهد که بر پایه تحلیل "سایه الکترومغناطیسی" (EM Shadow) استوار است.
برخلاف رادارهای فعال که بر بازتاب موج تکیه دارند، این سیستم با پایش تغییرات آنتروپی در شبکه و اعوجاج در میدان‌های پس‌زمینه (Background Fields)، حضور شیء را اثبات می‌کند. 
محاسبات بر پایه مثلثات کروی دقیق، معادلات ماکسول برای انتشار موج، و تحلیل رفتار ترانزیستورها در مدارهای منطقی پردازشگرهای محلی انجام می‌شود.

________________________________

## ۱. مقدمه و مبانی نظری (Introduction & Theoretical Framework)

### ۱.۱. تعریف مساله

روش‌های مرسوم راداری در برابر اجسام با سطح مقطع راداری (RCS) پایین دچار مشکل می‌شوند.
این سیستم با استفاده از گیرنده‌های توزیع‌شده، نبودِ سیگنال یا تغییر در چگالی شار مغناطیسی (سایه) را به عنوان سیگنال اصلی در نظر می‌گیرد.

### ۱.۲. مثلثات کروی در موقعیت‌یابی (Spherical Trigonometry)

برای محاسبه دقیق موقعیت شیء در آسمان نسبت به ناظر زمینی، از مثلثات کروی استفاده می‌کنیم. 
فرض کنید ناظر در نقطه $O$ و شیء در نقطه $T$ روی کره سماوی قرار دارند.

معادلات اساسی برای تبدیل مختصات و محاسبه فاصله زاویه‌ای ($\delta$) و آزیموت ($\alpha$) به شرح زیر است:

قانون کسینوس‌ها برای اضلاع (Spherical Law of Cosines):

$$\cos c = \cos a \cos b + \sin a \sin b \cos C$$

در سیستم ما، برای یافتن زاویه ارتفاع (Elevation - $El$) و سمت (Azimuth - $Az$):

$$\sin(El) = \sin(\phi_O) \sin(\phi_T) + \cos(\phi_O) \cos(\phi_T) \cos(\Delta \lambda)$$

که در آن:

$\phi_O$: عرض جغرافیایی ناظر

$\phi_T$: عرض جغرافیایی هدف (تخمین زده شده از مرکز سایه)

$\Delta \lambda$: اختلاف طول جغرافیایی

برای محاسبه آزیموت دقیق ($Az$):

$$\cos(Az) = \frac{\sin(\phi_T) - \sin(\phi_O) \sin(El)}{\cos(\phi_O) \cos(El)}$$
________________________________

## ۲. فیزیک الکترومغناطیس و اثبات سایه (Electromagnetic Physics)

### ۲.۱. معادلات ماکسول و انتشار موج

تشخیص سایه الکترومغناطیسی نیازمند درک دقیق انتشار موج در محیط است.
معادلات ماکسول به فرم دیفرانسیلی حاکم بر سیستم هستند:

$$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$$
$$\nabla \cdot \mathbf{B} = 0$$
$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$
$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

زمانی که یک شیء فلزی یا دی‌الکتریک مسیر موج پس‌زمینه را سد می‌کند، شدت میدان الکتریکی ($\mathbf{E}$) در گیرنده دچار افت می‌شود.
توان دریافتی ($P_r$) در حالت وجود سایه از رابطه اصلاح شده فریس (Friis) پیروی می‌کند:

$$P_r = P_t G_t G_r \left( \frac{\lambda}{4\pi d} \right)^2 \cdot \Gamma_{shadow}$$

که در آن $\Gamma_{shadow}$ ضریب تضعیف ناشی از سایه است و تابعی از سطح مقطع شیء ($A$) و طول موج ($\lambda$) می‌باشد. 
اگر $\Gamma_{shadow} \to 0$، سیستم وجود مانع را تشخیص می‌دهد.

________________________________

## ۳. معماری سخت‌افزار و الکترونیک (Hardware & Electronics)

این بخش به نحوه تبدیل سیگنال فیزیکی به داده دیجیتال در سطح مدارهای مجتمع می‌پردازد.

### ۳.۱. مدل‌سازی ترانزیستور در طبقه ورودی (Transistor Modeling)

سنسورها از تقویت‌کننده‌های کم‌نویز (LNA) استفاده می‌کنند. 
رفتار ترانزیستورهای MOSFET در ناحیه اشباع برای تقویت تغییرات جزئی ناشی از سایه بسیار حیاتی است.
جریان درین-سورس ($I_{DS}$) به صورت زیر مدل می‌شود:

$$I_{DS} = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2 (1 + \lambda V_{DS})$$

تغییر ناچیز در میدان الکتریکی ورودی ($\Delta E$) باعث تغییر در ولتاژ گیت ($V_{GS}$) می‌شود:

$$\Delta V_{GS} \propto \int \Delta \mathbf{E} \cdot dl$$

این تغییر کوچک باعث تغییر در جریان خروجی شده که توسط مدارهای منطقی خوانده می‌شود.

### ۳.۲. مدارهای منطقی و دیجیتال (Logic Circuits)

داده‌های آنالوگ پس از عبور از مبدل ADC وارد واحد پردازش منطقی می‌شوند.
گیت‌های منطقی (NAND/NOR) وظیفه فیلترینگ اولیه نویز را دارند.

تاخیر انتشار ($t_{pd}$) در گیت‌ها باید کمتر از فرکانس تغییرات سایه باشد:

$$t_{pd} \approx \frac{C_L V_{dd}}{I_{sat}}$$

اگر سیگنال از حد آستانه ($V_{IL}$ یا $V_{IH}$) عبور کند، وضعیت منطقی تغییر کرده و یک "رویداد" (Event) ثبت می‌شود.

________________________________

## ۴. آنتروپی شبکه و الگوریتم تشخیص (Network Entropy & Algorithm)

قلب تپنده سیستم، تحلیل آنتروپی برای یافتن بی‌نظمی در سیگنال‌های دریافتی است.

### ۴.۱. آنتروپی شانون (Shannon Entropy)

در حالت عادی، سیگنال‌های دریافتی از آسمان دارای یک توزیع احتمال $P(x)$ مشخص (نویز سفید یا سیگنال‌های مخابراتی) هستند.
ورود یک شیء، این توزیع را برهم می‌زند.
آنتروپی ($H$) سیستم به صورت زیر محاسبه می‌شود:

$$H(X) = - \sum_{i=1}^{n} P(x_i) \log_2 P(x_i)$$

در اینجا $x_i$ سطوح مختلف انرژی سیگنال است.

حالت عادی: آنتروپی بالا (نویز تصادفی).

حالت سایه (عبور شیء): کاهش آنتروپی (ایجاد یک الگوی منظم ناشی از انسداد) یا تغییر ناگهانی در آنتروپی موضعی.

### ۴.۲. آنتروپی متقاطع (Cross-Entropy) برای شبکه

برای حذف خطای سنسورهای تکی، از شبکه سنسورها استفاده می‌شود.
آنتروپی متقاطع بین دو سنسور $P$ و $Q$:

$$H(P, Q) = - \mathbb{E}_{x \sim P} [\log Q(x)]$$

اگر $H(P, Q)$ بین سنسورهای مجاور به طور ناگهانی افزایش یابد، نشان‌دهنده عبور لبه سایه از روی یکی از سنسورهاست.

________________________________

## ۵. پیاده‌سازی نرم‌افزاری (JavaScript Implementation)

این بخش کد جاوا اسکریپت مورد نیاز برای اجرا در محیط Node.js یا مرورگر (برای پردازش لبه/Edge) را نمایش می‌دهد.
این کد داده‌های ورودی را گرفته و آنتروپی را محاسبه می‌کند.

JavaScript

 * TAR-Q System: Electromagnetic Shadow Detection Module
 * Language: JavaScript (ES6+)
 * Context: Local Processing Unit
 
```
class ShadowDetector {
    constructor(sensorId, historySize = 100) {
        this.sensorId = sensorId;
        this.signalHistory = new Array(historySize).fill(0);
        this.threshold = 0.85; // Sensitivity threshold
    }

    // Update signal buffer with new readings from hardware
    updateSignal(newVal) {
        this.signalHistory.shift();
        this.signalHistory.push(newVal);
    }

    // Calculate Probability Distribution
    calculateProbabilities(data) {
        const counts = {};
        data.forEach(x => {
            const bucket = Math.floor(x * 10); // Discretization
            counts[bucket] = (counts[bucket] || 0) + 1;
        });
        
        const total = data.length;
        return Object.values(counts).map(c => c / total);
    }

    // Shannon Entropy Calculation
    // Formula: H(X) = - sum(p(x) * log2(p(x)))
    calculateEntropy() {
        const probs = this.calculateProbabilities(this.signalHistory);
        let entropy = 0;
        
        for (let p of probs) {
            if (p > 0) {
                entropy -= p * Math.log2(p);
            }
        }
        return entropy;
    }

    // Core Detection Logic
    detectObject() {
        const currentEntropy = this.calculateEntropy();
        
        // Logical Analysis: Low entropy implies ordered signal (shadow/blockage) 
        // amidst random noise, or significant deviation from baseline.
        
        const baselineEntropy = 3.5; // Hypothetical baseline for white noise
        const deviation = Math.abs(currentEntropy - baselineEntropy);

        if (deviation > this.threshold) {
            return {
                detected: true,
                entropy: currentEntropy,
                timestamp: Date.now(),
                message: "ANOMALY DETECTED: EM Shadow Pattern"
            };
        }
        return { detected: false };
    }
}

// --- Simulation of Hardware Loop ---
const processor = new ShadowDetector("Unit-Alpha-01");

// Simulating data stream from Transistor output (ADC values 0.0 to 1.0)
setInterval(() => {
    // Random noise (normal sky)
    let signal = Math.random(); 
    
    // Inject artificial shadow effect (signal drop) periodically
    if (Date.now() % 5000 < 500) {
        signal = signal * 0.2; // Shadow effect: signal attenuation
    }

    processor.updateSignal(signal);
    const result = processor.detectObject();

    if (result.detected) {
        console.log(`[ALERT] Sensor ${processor.sensorId}:`, result);
        // Trigger Spherical Trig Calculation Module here
    }
}, 100);
```

________________________________

## ۶. نتیجه‌گیری (Conclusion)

سیستم TAR-Q با تلفیق فیزیک کلاسیک (معادلات ماکسول) و ریاضیات مدرن (نظریه اطلاعات و آنتروپی)، روشی مقاوم در برابر اقدامات متقابل الکترونیکی (ECM) ارائه می‌دهد.
از آنجا که این سیستم غیرفعال (Passive) است و بر تحلیل "نبودِ انرژی" (سایه) تمرکز دارد، شناسایی آن توسط هدف تقریبا غیرممکن است.
پیاده‌سازی این الگوریتم‌ها بر روی پردازشگرهای محلی با استفاده از کدهای بهینه جاوا اسکریپت، امکان پردازش بلادرنگ (Real-time) را فراهم می‌سازد.

________________________________________________________________________________________________
________________________________________________________________________________________________
راهنمای تبدیل به فایل ۱۴-۲۰ صفحه‌ای:

برای توضیحات بیشتر در فایل Word موارد زیر را بسط دهید:

بسط فرمول‌ها: هر فرمول را در یک خط جداگانه بنویسید و متغیرهای آن را در پاراگراف‌های جداگانه با جزئیات کامل توضیح دهید.

دیاگرام‌ها: جایگاه‌های مشخص شده برای تصاویر را با رسم نمودارهای بلوکی (Block Diagrams) از مدارها و کره جغرافیایی پر کنید.

کدها: بخش کد را با کامنت‌های توضیحی خط به خط طولانی‌تر کنید و سناریوهای تست (Test Cases) را اضافه کنید.

توضیحات مداری: معادلات مربوط به خازن‌های پارازیتیک ترانزیستور ($C_{gd}, C_{gs}$) و تاثیر آن‌ها بر فرکانس قطع ($f_T$) را اضافه کنید.
