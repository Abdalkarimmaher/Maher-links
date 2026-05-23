# بوابة الروابط العربية

مشروع React + Tailwind CSS لبناء بوابة عربية RTL بسيطة وأنيقة لعرض 35-40 رابطاً خارجياً في بطاقات قابلة للبحث والتصفية.

## التشغيل

```bash
npm install
npm run dev
```

على Windows، إذا لم يكن `npm` ظاهراً في PATH:

```powershell
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
```

## تعديل الروابط

كل الروابط موجودة في ملف واحد:

```text
src/data/links.js
```

هيكل كل رابط:

```js
{
  title: "",
  description: "",
  category: "",
  url: "",
  icon: "",
  featured: false,
  comingSoon: false
}
```

التصنيفات الافتراضية:

```text
الكل، رسمي، مساعدات غذائية، تحديث بيانات، ترميم وإيواء، أيتام، أطفال وذوي إعاقة، مؤسسات خيرية، روابط عامة
```

الأيقونات تستخدم أسماء من `lucide-react` عبر ملف:

```text
src/utils/icons.jsx
```
