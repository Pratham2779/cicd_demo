// pipeline {
//     agent any

//     stages {
//         stage('Clean Workspace & Pull Code') {
//             steps {
//                 cleanWs()
//                 git 'https://github.com/pratham2779/cicd-demo.git'
//             }
//         }

//         stage('Build Docker Image') {
//             steps {
//                 script {
//                     docker.build("cicd-demo:latest", "--no-cache .")
//                 }
//             }
//         }

//         stage('Stop & Remove Old Container') {
//             steps {
//                 sh '''
//                 CONTAINER=$(docker ps -q -f name=cicd-demo-container)
//                 if [ "$CONTAINER" ]; then
//                     docker stop cicd-demo-container
//                     docker rm cicd-demo-container
//                 fi
//                 '''
//             }
//         }

//         stage('Run New Container') {
//             steps {
//                 sh 'docker run -d --name cicd-demo-container -p 8081:3000 cicd-demo:latest'
//             }
//         }

//         stage('Cleanup Dangling Images') {
//             steps {
//                 sh 'docker image prune -f'
//             }
//         }
//     }

//     post {
//         always {
//             echo 'CI/CD pipeline finished.'
//         }
//     }
// }





pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                // Clean workspace and pull latest code
                cleanWs()
                git 'https://github.com/pratham2779/cicd-demo.git'
            }
        }

        stage('Build & Deploy Docker') {
            steps {
                script {
                    // Build Docker image without cache
                    docker.build("cicd-demo:latest", "--no-cache .")

                    // Stop and remove old container if it exists
                    def containerId = sh(script: "docker ps -q -f name=cicd-demo-container", returnStdout: true).trim()
                    if (containerId) {
                        sh "docker stop cicd-demo-container"
                        sh "docker rm cicd-demo-container"
                    }

                    // Run new container
                    sh "docker run -d --name cicd-demo-container -p 8081:3000 cicd-demo:latest"

                    // Cleanup dangling images
                    sh "docker image prune -f"
                }
            }
        }
    }

    post {
        always {
            echo '✅ CI/CD pipeline finished.'
        }
    }
}
