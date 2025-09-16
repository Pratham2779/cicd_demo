pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                git 'https://github.com/pratham2779/cicd-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("cicd-demo:latest")
                }
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                if [ $(docker ps -q -f name=cicd-demo-container) ]; then
                    docker stop cicd-demo-container
                    docker rm cicd-demo-container
                fi
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name cicd-demo-container -p 8081:3000 cicd-demo:latest'
            }
        }
    }

    post {
        always {
            echo 'CI/CD pipeline finished.'
        }
    }
}
 