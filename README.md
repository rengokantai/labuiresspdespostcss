#### labuiresspdespostcss
#####1
```
git clone --bare https://github.com.....git .git
```
Then fix
```
git config --bool core.bare false
git reset --hard
```
#####2
######build the most important css styles
if we set
```
html {
    font-size: 62.5%;
    box-sizing: border-box;
}
```
then 1rem=10px
then
```
body{
 font-size: 1.8rem;  //easy to read , =18px
 }
```
 