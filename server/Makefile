current_dir = $(shell pwd)

run:
	-docker container stop animation-server
	docker image build -t animation-server .
	docker container run --rm -d --mount type=volume,src=animation-frames,dst=/data/animation-frames --name animation-server -p 4040:80 animation-server
