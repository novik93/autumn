<template lang="pug">
  .root-wrapper-container
    .root-container
      header.header-container
        .header
          .container
            .header__info
              .user
                .user__pic
                  img(src="../images/content/user.jpg").user__pic-avatar
                .user__name 
                  span Владимир Астаханов
                  a.exit-btn(href="#") Выйти
                  
              .header__title Панель администрирования
            a.exit-btn(href="#") Выйти
      section.tabs-container
        .tabs-container
          .container
            ul.tabs
              li.tabs__item
                a(href="#").tabs__link
                  .tabs__title Обо мне
              li.tabs__item
                a(href="#").tabs__link
                  .tabs__title Отзывы 
              li.tabs__item
                a(href="#").tabs__link
                  .tabs__title Работы 
      main.content-container
        .about-page-container
          .container
            .about-page__title
              h1.page-title Обо мне
              button.about-page__add-new Добавить группу
            .about-page__content
              .container.container--mobile-wide
                ul.skill-list
                  li.skill-list__item
                    .skill-container
                      .skill-item
                        .skill-item-decoration
                          input(type="text" placeholder="Название новой группы").skill-input
                          .skill-input-elem
                            a(href="").input-elem-pic
                              img(src="../images/content/tick.png")
                            a(href="").input-elem-pic
                              img(src="../images/content/Cross.png")
                        hr
                      .add-skill-wrapper
                        input(type="text" placeholder="новый навык").skill-input.skill-input-first
                        input(type="text" placeholder="%").skill-input.skill-input-second
                        button.about-page__add-new.about-page__add-new-big.about-page__add-new-grey
                  li.skill-list__item
                    .skill-container
                      .skill-item
                        .skill-item-decoration
                          .skill-input.skill-input-filled FrontEnd
                          .skill-input-elem
                            a(href="").input-elem-pic
                              img(src="../images/content/tick.png")
                            a(href="").input-elem-pic
                              img(src="../images/content/Cross.png")
                        hr
                        .add-skill
                          ul.skill-component
                            li.skill-component-name html
                              .skill-component-percent 30%
                              a(href="#").add-skill-decor
                                img(src="../images/content/Pencil.png").input-elem-pic
                                img(src="../images/content/trash.png").input-elem-pic
                            li.skill-component-name css
                              .skill-component-percent 50%
                              a(href="#").add-skill-decor
                                img(src="../images/content/Pencil.png").input-elem-pic
                                img(src="../images/content/trash.png").input-elem-pic
                            li.skill-component-name javascript
                              .skill-component-percent 60%
                              a(href="#").add-skill-decor
                                img(src="../images/content/Pencil.png").input-elem-pic
                                img(src="../images/content/trash.png").input-elem-pic
                                
                              
                      .add-skill-wrapper
                        input(type="text" placeholder="новый навык").skill-input.skill-input-first
                        input(type="text" placeholder="%").skill-input.skill-input-second
                        button.about-page__add-new.about-page__add-new-big
                  
                     
</template>




<style lang="postcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");


.root-wrapper-container {
  height: 100%;
}
.header-container {
  background: linear-gradient(to right, #3e3e59, #454573);
  padding: 15px 0;
  @include phones {
    padding: 20px 0;
  }
}

.root-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.maincontent {
  color: #414c63;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  /* background: url("~images/content/bg_1.jpg");
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;; */
  
  background-color: #f7f9fe;
  flex: 1;
  padding-top: 60px;
  @include phones {
    padding-top: 30px;
  }
}
.page-title {
  margin-bottom: 60px;
  font-size: 21px;
  font-weight: bold;
}
///////////////////head
.header {
  color: #fff;
}
.header__info {
  display: flex;
  align-items: center;
}
.header__title {
  color: rgba(#fff, 0.5);
  @include phones {
    display: none;
  }
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.user__name {
  font-size: 18px;
  font-weight: 600;
  .exit-btn {
    display: none;
    @include phones {
      display: block;
    }
  }
}
.user__pic {
  margin-right: 20px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
}
.exit-btn {
  opacity: 0.7;
  text-decoration: underline;
  font-size: 14px;
  &:hover {
    text-decoration: none;
  }
  @include phones {
    display: none;
  }
}

//////tabs

tabs-container {
  background: #fff;
}
.tabs {
  display: flex;
  height: 77px;
  @include phones {
    height: 87px;
  }
}
.tabs__item {
  height: 100%;
  margin-right: 30px;
  @include phones {
    margin-right: 3px;
  }
  &:last-child {
    margin-right: 0;
  }
}
.tabs__link {
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  width: 125px;
  justify-content: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  @include phones {
    width: 100px;
  }
  &:before {
    content: "";
  }
  &:hover,
  &.active {
    color: #383bcf;
    font-weight: 600;
    border-color: currentColor;
  }
}

//////////////skill about
.skill-container {
  padding: 20px;
  background-color: #fff;
  width: 525px;
  height: 390px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

  hr {
    margin-top: 20px;
  }
}
.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }
  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}
.about-page__add-new {
  background: transparent;
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}
.about-page__add-new-grey {
  &:before {
    background-color: #a0a5b1;
    background-image: none;

  }

   &:hover {
     &::before{
      background-image: linear-gradient(to right, #006aed, #3f35cb);
    }
   }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}
.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }
  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}

.skill-input {
  background: transparent;
  color: inherit;
  border: 0;
  width: 60%;
  border-bottom: 2px solid;
  outline: none;
  padding-bottom: 10px;
  font-weight: 600;
  opacity: 0.5;

}

.skill-input-filled {
  border-bottom: 0;
  opacity: 1;
  font-weight: 800;
}

.skill-item-decoration {
  display: flex;
}

.input-elem-pic {
  width: 15px;
  height: 15px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
}

.skill-input-elem {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.check-sign {
    position: absolute;
    background: red;
}

#check-part-1 {
    width: 50px;
    height: 20px;    
    transform:rotate(45deg);	
}

#check-part-2 {
    width: 100px;
    height: 20px;    
    transform: rotate(-45deg);
    left: 16px;
    top: -19px;
}

.skill-input-first {
  margin-right: 50px;
  width: 100%;
}

.skill-input-second {
  margin-right: 20px;
  width: 40%;
}

.add-skill-wrapper {
  display: flex;
  margin-left: 50px;
}


.about-page__add-new-big {
  &:before {
    flex-basis: auto;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0;
  }
}

.add-skill-decor {
  display: flex;
}

.skill-component-name {
  display: flex;
  justify-content: space-between;
}

.skill-component-percent {
  margin-left: 100px;
}

.skill-component-name {
   margin-top: 40px;
}
</style>