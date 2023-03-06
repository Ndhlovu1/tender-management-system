# A tender management system front-end with react
This project assumes you have all npm and npx and yam dependencies installed

##### Create the React App
```terminal
npx create-react-app .
```
##### Ensuring it runs
Expect to face a problem/challenge with the watchtime error, on unix/linux devices run the below commands

```terminal
# insert the new value into the system config
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# check that the new value was applied
cat /proc/sys/fs/inotify/max_user_watches
```
##### Start/Run the program
```shell
#Contrary to the code use the yarn command for better performance
> yarn start
```

##### Shortcuts
```reactjs
rfc -> (enter on keyboard)

```

##### Install Bootstrap
```shell
> yarn add bootstrap react-bootstrap
#Read on using react with Bootstrap on https://react-bootstrap.github.io/getting-started/introduction/
```
##### Go to Font Awesome CDN and paste this link in the index.html

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
````




