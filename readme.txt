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


ng new frontend --directory frontend --skip-install

git init

git config --global core.autocrlf true

git config --global core.autocrlf input //linux

git status

git add .


