module OS
    def OS.windows?
        (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RUBY_PLATFORM) != nil
    end

    def OS.mac?
        (/darwin/ =~ RUBY_PLATFORM) != nil
    end

    def OS.unix?
        !OS.windows?
    end

    def OS.linux?
        OS.unix? and not OS.mac?
    end
end

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.name = "SystemManager"
    v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
  end

  if OS.mac?
    config.vm.synced_folder ".", "/var/www/systemmanager"
  else
    config.vm.synced_folder ".", "/var/www/systemmanager", :type => "nfs", :nfs_version => 4
  end



  config.vm.network "private_network", :ip => '192.168.10.100', :adapter => 2
  #config.vm.network "forwarded_port", guest: 8080, host: 8080
  #config.vm.network "forwarded_port", guest: 6379, host: 6379
  #config.vm.network "forwarded_port", guest: 8529, host: 3000

  #config.vm.provision "file", source: "~/.tmux.conf", destination: "/home/vagrant/.tmux.conf"
  #config.vm.provision "file", source: "~/.tmux.conf", destination: "/root/.tmux.conf"

  config.vm.provision "shell", path: "vagrant/provision/start.sh", privileged: false
  config.vm.provision "shell", path: "vagrant/provision/nodejs.sh", privileged: false
  config.vm.provision "shell", path: "vagrant/provision/redis.sh", privileged: false
  config.vm.provision "shell", path: "vagrant/provision/arangodb.sh", privileged: false
  config.vm.provision "shell", path: "vagrant/bootstrap.sh", run: "always"

end
