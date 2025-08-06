import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, MessageCircle, Star, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              LoveConnect
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#plans" className="text-muted-foreground hover:text-primary transition-colors">
              Planos
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost">Entrar</Button>
            <Button variant="gradient">Cadastrar</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              💕 Mais de 50.000 conexões feitas
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Encontre Sua
              <br />
              Alma Gêmea
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A plataforma mais moderna e segura para encontrar relacionamentos verdadeiros. 
              Conecte-se com pessoas compatíveis baseado em interesses reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Input 
                placeholder="Digite seu email para começar..." 
                className="max-w-sm"
              />
              <Button variant="gradient" size="lg" className="whitespace-nowrap">
                Começar Agora
              </Button>
            </div>
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Verificação Real
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Matching Inteligente
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                95% Satisfação
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Por que escolher o LoveConnect?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos a melhor experiência em relacionamentos online com recursos únicos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Matching Inteligente</CardTitle>
                <CardDescription>
                  Algoritmo avançado que encontra pessoas realmente compatíveis com você
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <MessageCircle className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Chat Seguro</CardTitle>
                <CardDescription>
                  Conversas protegidas com criptografia de ponta a ponta
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Perfis Verificados</CardTitle>
                <CardDescription>
                  Todos os perfis passam por verificação rigorosa para sua segurança
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Como Funciona</h3>
            <p className="text-muted-foreground">Em apenas 3 passos simples</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Crie seu Perfil</h4>
              <p className="text-muted-foreground">
                Cadastre-se e complete seu perfil com suas informações e preferências
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Encontre Matches</h4>
              <p className="text-muted-foreground">
                Nosso algoritmo encontra pessoas compatíveis com seus interesses
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Conecte-se</h4>
              <p className="text-muted-foreground">
                Converse, conheça melhor e marque encontros reais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">
            Pronto para encontrar o amor?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já encontraram relacionamentos verdadeiros
          </p>
          <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
            Começar Minha Jornada 💕
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">LoveConnect</span>
              </div>
              <p className="text-muted-foreground text-sm">
                A plataforma de relacionamentos mais confiável do Brasil.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Produto</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Recursos</li>
                <li>Planos</li>
                <li>Segurança</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Suporte</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Central de Ajuda</li>
                <li>Contato</li>
                <li>FAQ</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 LoveConnect. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;