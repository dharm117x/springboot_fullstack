Parent:
D:\projects

mvn archetype:generate -DgroupId=com.example -DartifactId=springboot_fullstack -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

udpate pom:
 <packaging>pom</packaging>


Child module:
D:\projects\springboot_fullstack

mvn archetype:generate -DgroupId=com.example -DartifactId=rest-api -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

mvn archetype:generate -DgroupId=com.example -DartifactId=service -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

mvn archetype:generate -DgroupId=com.example -DartifactId=persistence -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

mvn archetype:generate -DgroupId=com.example -DartifactId=frontend -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

mklink /D node_modules "D:\programs\angular18\node_modules"

ng new frontend --directory frontend --skip-install

crrate repo on server and link to repos:

D:\projects\springboot_fullstack

echo "# springboot_fullstack" >> README.md
git init
git add README.md
git add .
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/dharm117x/springboot_fullstack.git
git push -u origin master






