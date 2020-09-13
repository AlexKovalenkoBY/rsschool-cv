
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

### 8. unfortunately, I didn't have practice in English ((

![Alt text](data:image/jpeg;base64,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 "Можно задать title")
