
# 1. Hi! My name is __Alexandr, Kovalenko__  

## 2. You can contact me via: <br> __**+375297498261, skype: kovalenkoam**__ <br>  __**telegram: @kovalenkoam**__

---

## 3. Summary

### I want to learn JavaScript in a way that makes it feel like a fish in water. I want to study modern technologies in programming, I want to develop myself, as well as take part in interesting and complex projects

---

## 4. Skills (e.g. programming languages, frameworks, methodologies, version control, tools etc.)

### Javascript, Aris 7.2, Linux, Git

---

## 5. Code examples (LATEST)

  ~~~      function DropListBoxView(this._elementArray) {
            var UserDialogTemplate = Dialogs.createNewDialogTemplate(730, 13, "Параметры формирования отчета", "dialogEventsDropListBox");//создаем шаблон диалога
            //      var UserDialogTemplate = Dialogs.createNewDialogTemplate ( 50, 50, 1100, 300, "Выбор параметров отчета", "dialogEvents");
            UserDialogTemplate.GroupBox(10, 10, 720, 30, "Выберите менеджера ПП, по которому необходимо сформировать отчет");//добавляем в шаблон рамку
            UserDialogTemplate.OptionGroup("Options");//добавляем в шаблон также поле выбора. "Options" - ето идентификатор поля. По нему потом можно узнать результат выбора.
            var selectedString = "ListBoxLeft";
            // eslint-disable-next-line no-unused-vars
            var outList = UserDialogTemplate.DropListBox(15, 20, 700, 25,
                this._elementArray.map(function (el) {
                    return el.Name(g_nLoc);
                })
                , selectedString);
            UserDialogTemplate.OKButton();//добавляем кнопку ОК
            UserDialogTemplate.CancelButton();//добавляем кнопку Cancel
            var dlg = Dialogs.createUserDialog(UserDialogTemplate); //создает диалог на базе нашего шаблона
            //   nuserdlg =Dialogs.show(__currentDialog = dlg);   //отображаем диалог и получаем дезультат (ОК или Cancel)
            //  __currentDialog = dlg;
            var nuserdlg = Dialogs.show(__currentDialog = dlg);

            if (nuserdlg == 0) {//если Cancel
                return false;
            }
            //если ОК
            //selected_option - здесь присваивается без var так как это глобальная переменная
            //  selected_option = dlg.getDlgValue("Options");//записываем в selected_option выбраный вариант поля "Options". (dlg.getDlgValue("Options") - номер выбранного варианта: 0,1,2...)

            selected_option = this._elementArray[dlg.getDlgSelection(selectedString)];
            return true;

        }
~~~

---

## 6. Experience (for a Junior Dev it means all kinds of experience: coding tests, projects from courses, freelance projects - wherever they had the opportunity to demonstrate skills they have

Also it would be awesome if you add links to source code)

## 7. My education

### 7.1. in 1999 I graduated from the Mogilev State University named after I. A.A. Kuleshova
  
### 7.2. in 2008 I graduated Belarussian state economical University with a degree in banking

---

 #### 8. unfortunately, I didn't have practice in English ((

### Thanks!

