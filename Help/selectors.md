# Selectors in Webdriverio

* Title Attribute 

```
<a href="https://research.ii.co.uk" title="Research Account Log In" class="btn btn-secondary btn-medium text-align-center css-0" target="_blank" data-link-type="external">research account login</a>
```
```
let researchNavButton = $('[title="Research Account Log In"]');
$('a=Research Account Log In');
```

```
<span>Log in</span>
```

```
let mainLogin = $('span=Log in');
```

