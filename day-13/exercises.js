function* techskills(){
    yield "Backend"
    yield "Devops"
    yield "AWS"
    yield "Docker"
    yield "Kubernetes "
}

const skills = techskills()
console.log(skills.next());
console.log(skills.next());
console.log(skills.next());
console.log(skills.next());
console.log(skills.next());
console.log(skills.next());