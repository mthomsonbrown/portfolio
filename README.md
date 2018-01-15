# Portfolio

Personal web presence. This is just a simple about page, contact info, resume, and a highlight of some of my hobby applications.

## Hosting on AWS:

Here's the long skinny:
- Create an EC2 instance:
	- Details
- Add security group features:
	- Details:
- Connect Elastic IP
	- Details
- SSH into instance
	- Details?
- Clone repo somewhere.
- Install Node, NPM, Angular:
	- Installing Node straight from the ubuntu repository gave me version 4.x, which caused problems, so (via (PPA instructions): https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04):
		- `curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh`
		- `sudo bash nodesource_setup.sh`
		- `sudo apt-get install nodejs`
		- That's node.
	- `sudo npm install -g @angular/cli`
		- All the caveats:
			- I ran a previous command that didn't seem to work:
				- `npm install angular-cli`
- Install packages:
	- `npm install`
	- Now it should run locally
- Forward some stuff (via: https://coderwall.com/p/plejka/forward-port-80-to-port-3000):
	- `sudo iptables -t nat -I OUTPUT -p tcp -d 127.0.0.1 --dport 80 -j REDIRECT --to-ports 3895`
	- sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3895
- Build it:
	- `ng build`
- And then run:
	- `node server.js`
		- Should be able to access now.
	- To run outside shell session (Feels like a hack, but not worrying about it right now (via: https://askubuntu.com/questions/8653/how-to-keep-processes-running-after-ending-ssh-session)):
		- `tmux`
		- `node server.js`
		- `ctrl+b`
		- `d`

Quite a headache, but this works (for this very specific version of node, ubuntu, etc.)